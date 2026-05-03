import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// output:'static' con prerender=false en la API route es el modo híbrido de Astro 5
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
});
