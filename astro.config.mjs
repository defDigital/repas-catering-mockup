// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Mockup, geen site die live gaat. De webbouwer van Repas bouwt de pagina na
 * in hun eigen CMS. De standaard-URL is daarom bewust niet repascatering.be:
 * zo staat elke build op noindex, ook als hij per ongeluk online komt.
 *
 * Bewust geen `image.layout` of `image.responsiveStyles`, zie CLAUDE.md.
 */
const SITE = process.env.SITE_URL ?? 'http://localhost:4390';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
});
