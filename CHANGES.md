# Professional redesign and launch checklist

## Fixed in this version

- Rebuilt the homepage around one clear business outcome: answer more enquiries, capture leads,
  and reduce repetitive work.
- Replaced the crowded hero and oversized repeating content blocks with a concise AI receptionist
  workflow demo, scannable service cards, before/after benefits, and a clearer consultation path.
- Rebuilt the navigation for desktop and mobile, with 44px-or-larger primary touch targets and a
  full-height mobile menu that does not crowd the logo or page content.
- Removed the fixed mobile booking bar, so no interface element covers the contact form, legal
  links, or footer on a phone.
- Made all primary page content visible in the initial HTML instead of hiding sections until a
  browser animation script runs.
- Updated the dependency lockfile; both the production and full development `npm audit` checks
  report zero known vulnerabilities.
- Replaced the broken custom-domain default with the working Vercel URL. Canonical URLs,
  Open Graph tags, structured data, `robots.txt`, and `sitemap.xml` now use
  `NEXT_PUBLIC_SITE_URL` when it is configured.
- Removed the unsupported “100+ customers” claim and clarified that Hamilton, Ontario is the
  service area rather than publishing an unverified street address.
- Changed “Book” calls to action to “Request” because the website currently uses a contact form,
  not a live calendar.
- Added field-level validation, accessible error messages, autocomplete hints, and bot protection
  to the contact form.
- Made the Services menus keyboard- and screen-reader-friendly, with correct expanded states,
  Escape-key handling, and outside-click closing.
- Improved FAQ semantics for assistive technology.
- Reworked the public privacy and terms pages for this Canadian business website and removed the
  visible template warning. Professional legal review is still recommended before commercial use.
- Improved local SEO metadata for Hamilton and corrected business structured data.
- Removed script-dependent entrance animations and cleaned unused global CSS declarations.
- Fixed footer links so they return to homepage sections from the legal pages.
- Hardened the mobile layout: the navigation scrolls on short screens, cards and form fields fit
  360px and 430px phone widths, long contact details wrap safely, and decorative backgrounds are
  clipped without creating horizontal page scroll.

## Before taking leads

1. Configure the three EmailJS values in Vercel so the form delivers messages without relying on
   the visitor's email application.
2. Set `NEXT_PUBLIC_SITE_URL` to the current live Vercel URL. Change it only after a custom domain
   is connected and returning a successful page.
   If using Cloudflare Pages, set it to the assigned `https://your-project.pages.dev` address.
3. Test one real form submission on desktop and mobile.
4. Replace the Gmail address with an address on your custom domain when you buy one.
5. Add genuine case studies, reviews, client logos, or measured outcomes only after you have
   permission and evidence for them.

## Recommended next business feature

Add a real AI receptionist demo: a short sample call, a transcript, a clear human-handoff flow,
supported integrations, and a privacy explanation. This will answer the biggest buyer questions
more effectively than adding more general marketing copy.
