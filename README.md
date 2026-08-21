# MyGamingFixLab

A professional Next.js starter for an SEO-focused gaming troubleshooting website.

## Run locally

On Windows PowerShell (if PowerShell blocks npm/npx scripts, use `.cmd`):

```powershell
cd C:\path\to\mygamingfixlab
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000

## Production check

```powershell
npm.cmd run build
npm.cmd start
```

## Before publishing

1. Set `NEXT_PUBLIC_SITE_URL` in your deployment environment.
2. Replace `hello@mygamingfixlab.online` if you use a different contact address.
3. Replace/expand sample guides with original tested content, screenshots, logs and authoritative source links.
4. Review Privacy, Terms and Disclaimer pages against the actual services you deploy.
5. Add analytics/Search Console after the domain is live.
6. Add AdSense only after approval. `AdSlot` components are placeholders and do not load any ad network code.
7. Add clear affiliate disclosures if affiliate links are introduced.

## Content architecture

- `/game-fixes`
- `/pc-gaming`
- `/gta-v`
- `/rust`
- `/roblox`
- `/steam`
- `/game-servers`
- `/tools`
- `/articles/[slug]`
- `/search`

Article content currently lives in `lib/articles.ts`. This keeps the starter dependency-free and easy to understand. For a larger site, move content into a CMS or MDX pipeline.

## Monetization readiness

The layout includes reserved ad positions, legal pages, semantic article pages, sitemap and robots metadata. This does **not** guarantee Google rankings or AdSense approval; those depend heavily on original content quality, policy compliance, site history and traffic.
