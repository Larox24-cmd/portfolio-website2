# Lakshanand Sugumar portfolio (Next.js)

The portfolio is a single self-contained page, `public/site.html`, served at `/` by a rewrite in `next.config.js`.
Orb geometry is bundled from [Jakubantalik/thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) (MIT).

## Run locally
    npm install
    npm run dev

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New, Project, import the repo. Framework preset: Next.js. Click Deploy.

Edit content in `public/site.html` (views counter constants `RENEWED` and `BASE` are near the top of the script).
