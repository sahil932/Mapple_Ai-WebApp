# Mapple AI Solution — Website

The official marketing website for **Mapple AI Solution** — *AI Solutions. Real Results.*

Built with **Next.js** (React) and **Tailwind CSS**. It is a fast, mobile‑friendly, SEO‑ready
site with a working contact form. This guide is written for **non‑technical owners** — you do
**not** need to know how to code to get it online.

---

## What you get

- A polished, responsive homepage (Hero, Services, Industries, Process, About, Contact).
- Individual sections for each of the 5 services.
- A working **contact form** that emails you every submission (via EmailJS — free).
- Legal pages: **Privacy Policy** (`/privacy`) and **Terms of Service** (`/terms`).
- Built‑in SEO: page titles, social‑share image, `sitemap.xml`, `robots.txt`, and business
  information (schema) for Google.
- Self‑hosted fonts and icons — nothing loads from third parties, so it is private and fast.

---

## Put it online for FREE (about 15 minutes)

You will use two free services: **GitHub** (stores the code) and **Vercel** (runs the website).

### Step 1 — Put the code on GitHub

1. Create a free account at <https://github.com> (you said you already have one — great).
2. Click the **+** in the top‑right → **New repository**.
3. Name it something like `mapple-ai-website`, keep it **Private** or Public, click
   **Create repository**.
4. On the new repository page, click **“uploading an existing file”**.
5. Drag in **all the files in this folder** — but do **not** upload the `node_modules`
   folder or the `.next` folder if you see them (they are large and rebuild automatically).
6. Click **Commit changes**.

### Step 2 — Deploy with Vercel

1. Go to <https://vercel.com> and click **Sign Up** → **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find your `mapple-ai-website` repository and click **Import**.
4. Leave all settings as they are (Vercel detects Next.js automatically) and click **Deploy**.
5. Wait ~1 minute. You will get a live link like `mapple-ai-website.vercel.app`. **That’s your website. 🎉**

Every time you change a file on GitHub, Vercel updates the live site automatically.

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
5. In **Vercel**, open your project → **Settings → Environment Variables** and add these three
   (names must match exactly):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | your Service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | your Template ID |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | your Public Key |

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

- **Business name, tagline, phone, email, address** (top of the file).
- **Your website address** — update the `url` value (currently
  `https://www.mappleaisolution.com`) once your real domain is set.
- **Services** — titles, descriptions, and bullet points.
- **Industries**, **why choose us**, and the **process steps**.
- The **dropdown options** in the contact form.

You do not need to touch any other files for normal content changes.

---

## Using your own domain name (e.g. mappleaisolution.com)

1. Buy the domain from any registrar (GoDaddy, Namecheap, Cloudflare, etc.).
2. In **Vercel** → your project → **Settings → Domains** → add your domain and follow the
   on‑screen instructions (it tells you exactly what to change at your registrar).
3. Update the `url` field in `lib/site.ts` to your new address so search engines and the
   social‑share preview use it.

---

## For developers (optional)

```bash
npm install       # install dependencies
npm run dev       # local preview at http://localhost:3000
npm run build     # production build
npm run start     # run the production build locally
```

**Project structure**

- `app/` — pages, layout, SEO (`sitemap.ts`, `robots.ts`), legal pages, favicon, fonts.
- `components/` — all UI sections (Hero, Services, Contact, Footer, etc.).
- `lib/site.ts` — **single source of truth** for site content and configuration.
- `public/og-image.png` — social‑share preview image.

Tech: Next.js (App Router), React, TypeScript, Tailwind CSS. Fonts are self‑hosted in
`app/fonts/` via `next/font/local`, so no external font requests are made.

> The Privacy Policy and Terms pages are sensible general templates, **not legal advice** —
> have them reviewed before relying on them.
