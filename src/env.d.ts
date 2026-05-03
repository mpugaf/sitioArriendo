/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly GMAIL_USER: string;
  readonly GMAIL_APP_PASSWORD: string;
  readonly OWNER_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
