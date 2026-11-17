# Repas Catering — mockup pagina Bedrijfsevents

Eén extra pagina voor repascatering.be, als landingspagina voor de Google
Ads-campagne op zakelijke klanten. Dit is een voorzet: de eigen webbouwer van
Repas (in bijberoep, de site draait niet op Webflow) bouwt hem na in hun CMS.

## Waarom zo

Uit de kickoff van 11 november 2026 met Jeff Philipsen:

- Jeff wil de site clean houden: één pagina extra, geen set pagina's.
- 80% B2B. Wie aanvraagt: eventmanagers, marketing, HR. Focus op events van 100+.
- Sterkste argumenten in zijn woorden: meedenken, groot aankunnen en toch
  flexibel, beleving, twintig jaar ervaring.
- Persoonlijk contact blijft centraal, dus het formulier blijft kort.
- Kasper stelde een offerteknop in de header voor, altijd in beeld.

## Vormgeving

Niet vrij gekozen: nagebouwd op de live site. Lichtgrijs `#EEE` in een zwart
kader, Playfair Display voor koppen, Playfair voor lopende tekst, zwarte
knoppen met een lange pijl, witte en zwarte kaarten die over een foto heen
schuiven. Classes met prefix `rp-`, breakpoints 991, 767 en 479.

## Inhoud

`src/content/` met een schema per type in `src/content.config.ts`:
gelegenheden, formules en getuigenissen. Beeld en logo's komen van de huidige
site, met toestemming opgehaald op 17 november 2026 (later aangevuld met
`contactbanner-bg.jpg`, de foto achter het babbelblok).

## Draaien

```bash
npm run verify
npm run preview
```

Preview op poort 4390, in `.claude/launch.json` als `repas-dist`.

## Nog open

- Contactblok ("babbel" en "Feest, Vertel ons erover!") en footer zijn
  overgenomen van de live site, met hun eigen vier velden. De webbouwer zet
  hier gewoon hun bestaande Form Builder-formulier en footer neer. In de
  mockup gaat het formulier naar `/bedankt`.
- Foodcorners heeft geen foto. Zodra er beeld is van een foodcorner, toevoegen.
- Twee claims door Jeff zelf genoemd, laten bevestigen: "twintig jaar ervaring"
  en de samenwerking met bekende Belgische chefs (was nog in opbouw).
- De offerteknop in de header moet op de hele site komen, niet alleen hier.
