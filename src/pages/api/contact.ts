import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { property } from '../../data/property';

// Astro 5: este endpoint no se prerenderiza, se ejecuta en Vercel serverless
export const prerender = false;

// ── Validación ────────────────────────────────────────────────────────────────
const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email().max(200),
  phone:   z.string().max(30).optional(),
  message: z.string().min(10).max(2000),
  website: z.string().optional(), // honeypot
});

// ── Rate limiting en memoria ──────────────────────────────────────────────────
// Nota: en Vercel serverless no se garantiza estado entre invocaciones,
// pero es suficiente para el tráfico bajo esperado (QR en conserjería).
interface RateBucket {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateBucket>();
const MAX_REQUESTS  = 3;
const WINDOW_MS     = 10 * 60 * 1000; // 10 minutos

function isRateLimited(ip: string): boolean {
  const now    = Date.now();
  const bucket = rateLimitMap.get(ip);

  if (!bucket || now > bucket.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (bucket.count >= MAX_REQUESTS) return true;

  bucket.count++;
  return false;
}

// ── Email HTML ────────────────────────────────────────────────────────────────
function buildEmailHtml(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const { name, email, phone, message } = params;
  const safeMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Confirmación de contacto</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
         style="max-width:600px;margin:40px auto 20px;">
    <tr>
      <td style="background:#B85C38;padding:28px 36px;border-radius:12px 12px 0 0;">
        <p style="margin:0;color:#fff;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;">
          Propiedad en arriendo
        </p>
        <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:600;line-height:1.3;">
          ${property.title}
        </h1>
      </td>
    </tr>
    <tr>
      <td style="background:#fff;padding:36px;border-radius:0 0 12px 12px;
                 box-shadow:0 4px 16px rgba(0,0,0,0.08);">

        <p style="margin:0 0 16px;color:#1E1D19;font-size:16px;">
          Hola <strong>${name}</strong>,
        </p>
        <p style="margin:0 0 28px;color:#524F47;font-size:15px;line-height:1.6;">
          Hemos recibido tu mensaje. Te contactaremos a la brevedad.
        </p>

        <!-- Resumen -->
        <div style="background:#FAFAF8;border-radius:8px;padding:22px 24px;margin-bottom:28px;">
          <p style="margin:0 0 16px;color:#1E1D19;font-size:12px;font-weight:700;
                    text-transform:uppercase;letter-spacing:0.08em;">
            Tu consulta
          </p>

          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#6E6B61;font-size:13px;width:120px;">Nombre</td>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#1E1D19;font-size:13px;font-weight:500;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#6E6B61;font-size:13px;">Correo</td>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#1E1D19;font-size:13px;font-weight:500;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#6E6B61;font-size:13px;">Teléfono</td>
              <td style="padding:8px 0;border-bottom:1px solid #EAE8E1;
                         color:#1E1D19;font-size:13px;font-weight:500;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td colspan="2" style="padding:12px 0 0;">
                <span style="display:block;color:#6E6B61;font-size:13px;margin-bottom:8px;">
                  Mensaje
                </span>
                <p style="margin:0;color:#1E1D19;font-size:14px;line-height:1.6;
                           white-space:pre-wrap;">${safeMessage}</p>
              </td>
            </tr>
          </table>
        </div>

        <p style="margin:0;color:#908D82;font-size:13px;line-height:1.6;">
          Si tienes alguna consulta adicional, puedes responder directamente a este correo.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 0;text-align:center;">
        <p style="margin:0;color:#BAB6A8;font-size:11px;">
          ${property.address}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Handler ────────────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Obtener IP (Vercel propaga X-Forwarded-For)
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    clientAddress ??
    'unknown';

  // Rate limiting
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: 'Demasiados intentos. Espera unos minutos y vuelve a intentarlo.' },
      { status: 429 }
    );
  }

  // Parsear body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Solicitud inválida.' }, { status: 400 });
  }

  // Validación servidor
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: 'Datos inválidos.', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, message, website } = parsed.data;

  // Honeypot: el campo "website" solo lo rellena un bot
  if (website) {
    // Descartar silenciosamente
    return Response.json({ ok: true });
  }

  // Configurar transporter SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_APP_PASSWORD,
    },
  });

  // Enviar correo
  try {
    await transporter.sendMail({
      from:    `"${property.title}" <${import.meta.env.GMAIL_USER}>`,
      to:      email,
      bcc:     import.meta.env.OWNER_EMAIL,
      replyTo: import.meta.env.GMAIL_USER,
      subject: `Confirmación de contacto - ${property.title}`,
      html:    buildEmailHtml({ name, email, phone, message }),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] Error al enviar correo:', err);
    return Response.json(
      { ok: false, error: 'No se pudo enviar el correo. Por favor intenta más tarde.' },
      { status: 500 }
    );
  }
};
