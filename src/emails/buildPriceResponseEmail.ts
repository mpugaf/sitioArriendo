import { property } from '../data/property';

/** Genera el HTML del correo de respuesta a consultas de precio. */
export function buildPriceResponseEmail(params: { name: string }): {
  subject: string;
  html: string;
} {
  const { name } = params;
  const rent = property.monthlyRent.toLocaleString('es-CL');

  const subject = `Re: Departamento en Gral. Jofré — Todo incluido a $${rent}/mes`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
         style="max-width:600px;margin:40px auto 20px;">

    <!-- Encabezado -->
    <tr>
      <td style="background:#B85C38;padding:28px 36px;border-radius:12px 12px 0 0;">
        <p style="margin:0;color:#f0d5c8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">
          Departamento en arriendo · Santiago
        </p>
        <h1 style="margin:8px 0 0;color:#fff;font-size:24px;font-weight:700;line-height:1.25;">
          ${property.title}
        </h1>
        <p style="margin:6px 0 0;color:#f0d5c8;font-size:13px;line-height:1.5;">
          ${property.subtitle}
        </p>
      </td>
    </tr>

    <!-- Precio destacado -->
    <tr>
      <td style="background:#3D2B1F;padding:20px 36px;">
        <p style="margin:0;color:#f0d5c8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">
          Precio mensual — todo incluido
        </p>
        <p style="margin:6px 0 0;font-size:38px;font-weight:800;color:#fff;line-height:1;">
          $${rent}
          <span style="font-size:16px;font-weight:400;color:#f0d5c8;"> / mes</span>
        </p>
        <p style="margin:8px 0 0;color:#d4b5a4;font-size:13px;">
          Sin gastos comunes · Incluye estacionamiento y bodega
        </p>
      </td>
    </tr>

    <!-- Cuerpo principal -->
    <tr>
      <td style="background:#fff;padding:36px;border-radius:0 0 12px 12px;
                 box-shadow:0 4px 16px rgba(0,0,0,0.08);">

        <p style="margin:0 0 20px;color:#1E1D19;font-size:16px;line-height:1.5;">
          Hola <strong>${name}</strong>,
        </p>
        <p style="margin:0 0 28px;color:#524F47;font-size:15px;line-height:1.7;">
          Gracias por tu interés. El precio de <strong>$${rent}/mes</strong> no es solo el arriendo —
          incluye <em>todo</em> lo que necesitas para entrar y vivir cómodamente. Te lo detallo:
        </p>

        <!-- Lo que incluye -->
        <div style="background:#FAFAF8;border-radius:10px;padding:24px 28px;margin-bottom:28px;">
          <p style="margin:0 0 18px;color:#1E1D19;font-size:12px;font-weight:700;
                    text-transform:uppercase;letter-spacing:0.09em;">
            Qué incluye el arriendo
          </p>

          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;width:30px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">Terraza privada de 20 m²</strong>
                <br><span style="color:#6E6B61;font-size:12px;line-height:1.5;">
                  Con vista despejada al Cerro San Cristóbal. Un privilegio exclusivo de muy pocos
                  departamentos en el edificio: espacio para mesa, sillas y área de descanso al aire libre.
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">Estacionamiento</strong>
                <br><span style="color:#6E6B61;font-size:12px;">
                  En Santiago, el estacionamiento se arrienda habitualmente por $50.000–$80.000 aparte. Aquí ya está incluido.
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">Bodega</strong>
                <br><span style="color:#6E6B61;font-size:12px;">
                  Espacio de almacenamiento exclusivo. También se arrienda por separado en la mayoría de los edificios.
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">72 m² interiores · 2 dormitorios · 1 baño</strong>
                <br><span style="color:#6E6B61;font-size:12px;">
                  Dormitorio principal de gran tamaño (resultado de la unión de dos dormitorios), segundo
                  dormitorio ideal para visitas u oficina en casa.
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">Cocina cerrada completamente equipada</strong>
                <br><span style="color:#6E6B61;font-size:12px;">
                  Living-comedor integrado con luz natural y acceso directo a la terraza.
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;border-bottom:1px solid #EAE8E1;">
                <strong style="color:#1E1D19;font-size:14px;">Portería 24/7</strong>
                <br><span style="color:#6E6B61;font-size:12px;">Seguridad y tranquilidad en todo momento.</span>
              </td>
            </tr>
            <tr>
              <td style="padding:9px 0;vertical-align:top;
                         color:#B85C38;font-size:16px;">&#10003;</td>
              <td style="padding:9px 0;">
                <strong style="color:#1E1D19;font-size:14px;">Sin gastos comunes</strong>
                <br><span style="color:#6E6B61;font-size:12px;">
                  Lo que ves es lo que pagas. Sin sorpresas a fin de mes.
                </span>
              </td>
            </tr>
          </table>
        </div>

        <!-- Argumento de valor -->
        <div style="border-left:3px solid #B85C38;padding:12px 20px;margin-bottom:28px;background:#FDF6F3;border-radius:0 8px 8px 0;">
          <p style="margin:0 0 8px;color:#3D2B1F;font-size:14px;font-weight:700;">
            ¿Por qué es una oportunidad real?
          </p>
          <p style="margin:0;color:#524F47;font-size:13px;line-height:1.7;">
            Departamentos con estacionamiento y terraza en Providencia o en este límite con
            Santiago Centro se arriendan habitualmente entre <strong>$700.000 y $900.000</strong>.
            Aquí obtienes todo eso —más bodega y sin gastos comunes— a <strong>$${rent}</strong>,
            a dos cuadras del Metro Parque Bustamante (Línea 5) y rodeado de restaurantes,
            parques, ciclovías y servicios.
          </p>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-bottom:28px;">
          <p style="margin:0 0 16px;color:#524F47;font-size:15px;line-height:1.6;">
            El departamento está disponible para visitar. Si quieres conocerlo en persona,
            solo responde este correo o escríbeme directamente para coordinar un horario.
          </p>
          <span style="display:inline-block;background:#B85C38;color:#fff;
                    padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;
                    letter-spacing:0.02em;">
            Responde este correo para agendar tu visita
          </span>
        </div>

        <p style="margin:0;color:#908D82;font-size:13px;line-height:1.6;border-top:1px solid #EAE8E1;padding-top:20px;">
          Puedes responder directamente a este correo o ver más fotos y detalles del departamento
          en el sitio web. Estoy disponible para cualquier consulta adicional.
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px 0;text-align:center;">
        <p style="margin:0 0 4px;color:#BAB6A8;font-size:11px;">${property.address}</p>
        <p style="margin:0;color:#D4D0C4;font-size:10px;">
          Metro Parque Bustamante (L5) · Santiago Centro / Providencia
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
