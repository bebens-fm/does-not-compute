
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update to your actual Pages URL, e.g. https://bebens-fm.github.io/does-not-compute/
const SITE_URL = 'https://<your-username>.github.io/<your-repo>/';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), tailwind(), sitemap()],
});
