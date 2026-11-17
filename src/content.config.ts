import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Inhoud van de pagina Bedrijfsevents, per inhoudstype een schema.
 * De webbouwer van Repas kan dit als invulinstructie gebruiken.
 * Alles komt uit de kickoff van 11 november 2026 of van repascatering.be.
 */

// Zakelijke gelegenheden die Jeff in de kickoff noemde.
const gelegenheden = defineCollection({
  loader: file('src/content/gelegenheden.json'),
  schema: z.object({
    volgorde: z.number(), // plek in de lijst
    titel: z.string(), // korte titel
    tekst: z.string(), // één zin
  }),
});

// Cateringformules. Foto is optioneel: niet voor elke formule is er beeld.
const formules = defineCollection({
  loader: file('src/content/formules.json'),
  schema: ({ image }) =>
    z.object({
      volgorde: z.number(),
      titel: z.string(),
      tekst: z.string(),
      foto: image().optional(),
      fotoAlt: z.string().optional(),
      link: z.string().url().optional(), // bv. naar Repas Exclusive
    }),
});

// Getuigenissen van zakelijke klanten, letterlijk van de huidige site.
const getuigenissen = defineCollection({
  loader: file('src/content/getuigenissen.json'),
  schema: z.object({
    citaat: z.string(),
    naam: z.string(),
    functie: z.string(),
    bedrijf: z.string(),
  }),
});

export const collections = { gelegenheden, formules, getuigenissen };
