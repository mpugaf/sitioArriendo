# Sitio Arriendo

Sitio web estático optimizado para mostrar una propiedad en arriendo. Stack: Astro 5 + TailwindCSS + Cloudinary + PhotoSwipe. Deploy en Vercel (free tier).

---

## 1. Setup local

```bash
# Clonar el repositorio
git clone <url-repositorio>
cd sitioArriendo

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus valores reales (ver secciones 2 y 3)

# Iniciar servidor de desarrollo
npm run dev
# Abre http://localhost:4321
```

---

## 2. Gmail App Password (SMTP)

Para que el formulario de contacto envíe correos, necesitas una **contraseña de aplicación** de Gmail (distinta a tu contraseña normal).

1. Activa la **verificación en dos pasos** en tu cuenta Google:  
   [myaccount.google.com/security](https://myaccount.google.com/security)

2. Ve a **Contraseñas de aplicación**:  
   [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

3. Selecciona **Otro (nombre personalizado)**, escribe `sitio-arriendo` y haz clic en **Generar**.

4. Copia la contraseña de 16 caracteres (formato `xxxx xxxx xxxx xxxx`) y pégala sin espacios en `.env`:

```
GMAIL_USER=tu-correo@gmail.com
GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
OWNER_EMAIL=correo-donde-quieres-recibir-copia@ejemplo.com
```

---

## 3. Cloudinary: subir imágenes y obtener publicIds

1. Crea una cuenta gratuita en [cloudinary.com](https://cloudinary.com) (25 GB almacenamiento gratis).

2. En el dashboard, copia tu **Cloud name** y ponlo en `.env`:
   ```
   PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
   ```

3. Ve a **Media Library** → crea una carpeta llamada `property`.

4. Arrastra y suelta tus fotos de la propiedad en esa carpeta.

5. Para cada imagen, haz clic en ella y copia el valor de **Public ID**  
   (ejemplo: `property/living-principal`).

6. Pega esos Public IDs en `src/data/property.ts` en el array `images`.

> La imagen con `isHero: true` se usa como fondo del hero y como imagen OG.

---

## 4. Personalizar datos de la propiedad

Edita `src/data/property.ts`:

```ts
export const property: Property = {
  title:          'Nombre de tu propiedad',
  subtitle:       'Frase corta y descriptiva',
  description:    'Descripción completa en prosa...',
  sqm:            95,          // metros cuadrados
  bedrooms:       3,
  bathrooms:      2,
  storage:        true,        // bodega incluida
  parking:        true,        // estacionamiento incluido
  location:       'Barrio, Ciudad',
  address:        'Dirección exacta',
  monthlyRent:    850000,      // en CLP
  commonExpenses: 75000,       // en CLP
};
```

Para agregar el mapa de Google Maps, edita `src/components/Location.astro` y sigue las instrucciones del comentario `TODO` dentro del archivo.

---

## 5. Deploy en Vercel

1. Sube el repositorio a GitHub.

2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.

3. Vercel detecta Astro automáticamente. Sin cambios en la configuración de build.

4. En **Settings → Environment Variables**, agrega las cuatro variables:
   - `PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `OWNER_EMAIL`

5. Haz clic en **Deploy**. El primer deploy tarda ~2 minutos.

6. Cada push a `main` dispara un redeploy automático.

---

## 6. Generar el código QR

Una vez que el sitio esté publicado, obtén la URL de Vercel (ej: `https://sitio-arriendo.vercel.app`) y genera el QR:

**Opción A – online (sin instalar nada):**  
[qrcode-monkey.com](https://www.qrcode-monkey.com) → pega la URL, personaliza colores, descarga PNG/SVG.

**Opción B – terminal:**
```bash
npx qrcode-terminal "https://tu-sitio.vercel.app"

# O para generar un archivo SVG:
npx qrcode "https://tu-sitio.vercel.app" -o qr.svg
```

Imprime el QR en tamaño mínimo 3×3 cm para que sea escaneable con comodidad.

---

## Variables de entorno

| Variable | Dónde usarla | Descripción |
|---|---|---|
| `PUBLIC_CLOUDINARY_CLOUD_NAME` | Vercel + `.env` | Nombre del cloud en Cloudinary |
| `GMAIL_USER` | Vercel + `.env` | Correo Gmail del remitente SMTP |
| `GMAIL_APP_PASSWORD` | Vercel + `.env` | Contraseña de aplicación (16 chars) |
| `OWNER_EMAIL` | Vercel + `.env` | Correo del propietario (recibe BCC) |

Las variables `GMAIL_*` y `OWNER_EMAIL` son secretas y nunca se exponen al cliente.
