# mariomoschetta.com

Sito personale di **Mario Moschetta** — *l'Apripista*. Home long-form narrativa,
bilingue IT/EN, costruita sul design system "Mario Moschetta" (Ink / Volt ⚡ / Paper).

Implementazione statica (zero build step) a partire dal design handoff di Claude Design.

## Struttura

```
public/
  index.html          # la home (markup statico IT, SEO-friendly)
  app.js              # toggle IT/EN, icone Lucide, podcast, link centralizzati
  robots.txt, sitemap.xml
  assets/favicon.svg  # la ⚡ del brand
  fonts/              # Bricolage Grotesque, Hanken Grotesk, Space Mono (self-hosted)
  styles/
    ds.css            # entry del design system (importa i token sotto)
    colors/typography/spacing/effects/fonts/base/components .css
    site.css          # layout della home + aggiunte di produzione
vercel.json           # output=public, cleanUrls, cache headers
```

## Sviluppo locale

```bash
python3 -m http.server 4321 --directory public
# → http://localhost:4321
```

## Deploy (Vercel)

```bash
vercel        # preview
vercel --prod # produzione
```

Dominio: **mariomoschetta.com** (DNS su GoDaddy → puntare ai record Vercel).

## ⚠️ Link da confermare (in `public/app.js`, oggetto `LINKS`)

| chiave    | valore attuale                                  | stato        |
|-----------|-------------------------------------------------|--------------|
| whatsapp  | wa.me/393485714055                              | ✅ confermato |
| tiktok    | tiktok.com/@mariomoschetta_                     | da verificare|
| instagram | instagram.com/mariomoschetta                    | da verificare|
| linkedin  | linkedin.com/in/mariomoschetta                  | da verificare|
| youtube   | youtube.com/@mariomoschetta                     | ⚠️ da confermare |
| spotify   | open.spotify.com/search/Thinking%20Forward      | ⚠️ URL show da inserire |
| fatturai  | fatturai.it                                     | da verificare|
| thinking  | (placeholder → fatturai.it)                      | ⚠️ dominio da inserire |

Per il player Spotify inline: impostare `SPOTIFY_SHOW_ID` in `app.js`.

## Foto

Il ritratto in *Apertura* è un placeholder (`.portrait-slot`). Sostituire con:
`<img class="portrait" src="assets/mario.jpg" alt="Mario al lavoro, Milano">`.

## Prossimi passi

- Pagine profonde: `/storia`, `/progetti`, `/aziende`, `/formazione`, `/note` (già nel design handoff).
- Traduzione EN dei testi lunghi delle pagine profonde.
