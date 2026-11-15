# Air Force Mechanical

Marketing site for Air Force Mechanical, the commercial division of Air Force HVAC. Live at
[airforcemechanical.co](https://www.airforcemechanical.co).

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Where things live

| What | Where |
| --- | --- |
| Company details, nav, client list | `src/lib/site.ts` |
| Capabilities (nine scopes) | `src/data/capabilities.ts` |
| Case studies and experience | `src/data/projects.ts` |
| Insights articles | `src/data/insights-a.ts`, `src/data/insights-b.ts` |
| Shared sections and cards | `src/components/Sections.tsx` |
| Photos | `public/images` |
| Downloadable PDFs | `public/downloads` |

To add an insight, append an entry to one of the insights files. It appears on `/insights`, gets its
own page and is added to the sitemap automatically.

## Contact form

The form posts to `/api/contact`, which sends email through [Resend](https://resend.com). Set
`RESEND_API_KEY` in the Vercel project (see `.env.example`). Without a key the form falls back to a
pre-filled email link, so enquiries are never lost.
