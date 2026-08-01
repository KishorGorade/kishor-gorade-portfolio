# Kishor Gorade — SOC / Security Operations Portfolio

A premium, interactive portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**.

## Features
- 3D wireframe hero visualization (Three.js / React Three Fiber)
- Live animated threat radar widget with simulated feed
- Cmd+K / Ctrl+K command palette for quick navigation
- Custom dual-layer cursor, magnetic buttons, spotlight cards
- Live IST clock, scroll progress bar, animated counters
- Full SEO: Metadata API, OpenGraph, Twitter cards, JSON-LD, sitemap.xml, robots.txt
- Fully responsive, dark-themed, cybersecurity-branded design

## 1. Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your resume PDF
# Place your resume file inside the /public folder, e.g.:
# public/KISHOR_GORADE_Security_Operations_Engineer.pdf

# 3. Run locally
npm run dev
# visit http://localhost:3000
```

## 2. Deploy for FREE on Vercel (recommended — 1-click, gives you a public URL)

Vercel is made by the creators of Next.js and is the easiest path to a live URL.

### Option A — Deploy via GitHub (recommended)
1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign up/log in with your GitHub account.
3. Click **"Add New Project"** → select your repository.
4. Vercel auto-detects Next.js — leave all settings as default.
5. Click **Deploy**. In ~1 minute you'll get a live URL like:
   `https://your-project-name.vercel.app`
6. (Optional) Add a custom domain: Project → Settings → Domains → add your domain (e.g. `kishorgorade.dev`) and update your domain's DNS records as instructed.

### Option B — Deploy via Vercel CLI (no GitHub needed)
```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production URL
```
This prints a live URL directly in your terminal that anyone can open.

## 3. Alternative free hosts
- **Netlify**: connect GitHub repo → build command `npm run build` → publish directory `.next` (use the Next.js Netlify plugin, auto-detected).
- **Cloudflare Pages**: connect repo, framework preset "Next.js".
- **Render**: create a "Web Service", build command `npm install && npm run build`, start command `npm start`.

Vercel is recommended since Next.js is built by the same team and requires zero configuration.

## 4. Before going live — update these
- `lib/data.ts` → replace placeholder testimonials, GitHub links, and project repo URLs with your real ones.
- `app/layout.tsx` → update `siteConfig.url` in `lib/data.ts` to your final domain once you have one, so SEO metadata (OpenGraph/canonical/sitemap) is accurate.
- Add real project screenshots (replace emoji placeholders in `Projects.tsx`).
- Add an `og-image.png` (1200x630) and `favicon.ico` to `/public` for social sharing previews.

## 5. Project Structure
```
app/
  layout.tsx      → SEO metadata, fonts, JSON-LD
  page.tsx        → assembles all sections
  sitemap.ts       → dynamic sitemap.xml
  robots.ts        → dynamic robots.txt
  globals.css      → Tailwind + custom effects
components/        → all UI sections & widgets
lib/data.ts        → all site content (single source of truth)
public/            → static assets (resume PDF, favicon, og-image)
```

Once deployed, share the Vercel URL (or your custom domain) — anyone with the link can access your portfolio from anywhere.
