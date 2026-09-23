# Mapple AI Solution — Website

The official marketing website for **Mapple AI Solution** — *AI Solutions. Real Results.*

Built with **Next.js** (React) and **Tailwind CSS**. It is a fast, mobile‑friendly, SEO‑ready
site with a working contact form. This guide is written for **non‑technical owners** — you do
**not** need to know how to code to get it online.

---

## What you get

- A polished, responsive homepage (Hero, Services, Industries, Process, About, FAQ, Contact).
- Individual sections for each of the 5 services.
- A consultation form with an EmailJS delivery option and a ready-to-send email fallback.
- Legal pages: **Privacy Policy** (`/privacy`) and **Terms of Service** (`/terms`).
- Built‑in SEO: page titles, social‑share image, `sitemap.xml`, `robots.txt`, and business
  information (schema) for Google.
- Accessible menus and FAQ controls, plus clear field-level contact-form validation.
- Self‑hosted fonts and icons — nothing loads from third parties, so it is private and fast.

---

## Hosting options

Use **GitHub** to store the code. **Vercel** is the simplest deployment option for this Next.js
project. A static-export build is also included for **Cloudflare Pages**. Review each provider's
current plans and terms before choosing one for commercial use.

### Step 1 — Put the code on GitHub

1. Create a free account at <https://github.com> (you said you already have one — great).
2. Click the **+** in the top‑right → **New repository**.
3. Name it something like `mapple-ai-website`, keep it **Private** or Public, click
   **Create repository**.
4. On the new repository page, click **“uploading an existing file”**.
5. Drag in **all the files in this folder** — but do **not** upload the `node_modules`
   folder or the `.next` folder if you see them (they are large and rebuild automatically).
6. Click **Commit changes**.

### Step 2A — Deploy with Vercel

1. Go to <https://vercel.com> and sign in with GitHub.
2. Choose **Add New → Project**, select your repository, and click **Import**.
3. Leave the detected Next.js build settings unchanged.
4. Add the environment variables listed in the contact-form section below.
5. Click **Deploy**.

Every push to GitHub will rebuild the website automatically.

### Step 2B — Deploy with Cloudflare Pages

1. Open **Workers & Pages** in Cloudflare and import your GitHub repository.
2. Set **Build command** to `npm run build:cloudflare`.
3. Set **Build output directory** to `out`.
4. Add the environment variables listed below, then deploy.

Every push to GitHub will rebuild the Cloudflare Pages deployment automatically.

---

## Turn on the contact form (EmailJS — free)

Until you do this, the form still works — it opens the visitor’s email app pre‑filled to you.
To receive submissions directly in your inbox instead:

1. Create a free account at <https://www.emailjs.com>.
2. **Add an Email Service** (e.g. connect your Gmail) → copy the **Service ID**.
3. **Create an Email Template**. In the template body, use these exact placeholders so the
   details come through:

   ```
   Name: {{from_name}}
   Business: {{business_name}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Service: {{service}}
   Message: {{message}}
   ```

   Copy the **Template ID**.
4. Go to **Account → API Keys** → copy your **Public Key**.
5. In **Vercel**, open your project → **Settings → Environment Variables** and add these values
   (names must match exactly):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | your Service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | your Template ID |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | your Public Key |
   | `NEXT_PUBLIC_SITE_URL` | your live URL, such as `https://mapple-ai-web-app.vercel.app` |

6. Click **Save**, then go to the **Deployments** tab → **… → Redeploy** so the change takes effect.

(See `.env.local.example` for the same notes.)

---

## Editing your website content

**Almost all wording, contact details, and services live in one file:**

```
lib/site.ts
```

Open it on GitHub (click the file → the pencil ✏️ icon → make changes → **Commit changes**), and
the live site updates within a minute. In that file you can change:

- **Business name, tagline, phone, email, and service area** (top of the file).
- **Your website address** — set `NEXT_PUBLIC_SITE_URL` in Vercel. The project safely defaults
  to `https://mapple-ai-web-app.vercel.app` until a verified custom domain is connected.
- **Services** — titles, descriptions, and bullet points.
- **Industries**, **why choose us**, and the **process steps**.
- The **dropdown options** in the contact form.

You do not need to touch any other files for normal content changes.

---

## Free address or your own domain

Cloudflare Pages includes a free `*.pages.dev` address. Vercel deployments include a
`*.vercel.app` address under the applicable plan. A custom `.com` or `.ca` domain normally has an
annual registration fee; trustworthy permanent custom domains are generally not free.

To connect a domain you already own:

1. Buy the domain from any registrar (GoDaddy, Namecheap, Cloudflare, etc.).
2. In **Vercel** → your project → **Settings → Domains** → add your domain and follow the
   on‑screen instructions (it tells you exactly what to change at your registrar).
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel with the full `https://` URL, then redeploy. This updates
   canonical links, the sitemap, structured data, and social-share URLs.

---

## For developers (optional)

```bash
npm install       # install dependencies
npm run dev       # local preview at http://localhost:3000
npm run lint      # code-quality checks
npm run build     # production build
npm run build:cloudflare # generate the static `out/` folder for Cloudflare Pages
npm run start     # run the production build locally
```

**Project structure**

- `app/` — pages, layout, SEO (`sitemap.ts`, `robots.ts`), legal pages, favicon, fonts.
- `components/` — all UI sections (Hero, Services, Contact, Footer, etc.).
- `lib/site.ts` — **single source of truth** for site content and configuration.
- `public/og-image.png` — social‑share preview image.

Tech: Next.js (App Router), React, TypeScript, Tailwind CSS. Fonts are self‑hosted in
`app/fonts/` via `next/font/local`, so no external font requests are made.

> The legal pages have been customized for this website, but legal requirements depend on the
> company and the data it handles. Have a qualified Ontario professional review them before launch.
