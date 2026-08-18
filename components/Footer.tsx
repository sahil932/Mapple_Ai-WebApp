import { Logo } from "./Logo";
import { site, services, nav } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, CalendarIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* pre-footer CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center sm:text-left lg:flex-row lg:gap-8">
          <div>
            <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Not sure where to start?
            </p>
            <p className="mt-2 text-[15px] text-slate-400">
              Book a free 30-minute call. No commitment, no jargon — just honest advice.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              <CalendarIcon className="h-4 w-4" />
              Book a Free Consultation
            </a>
            <a href={site.phone.href} className="btn btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-400">
              Practical AI, automation, web applications, and digital marketing that help
              service businesses save time, capture more leads, and grow.
            </p>
          </div>

          {/* services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#service-${s.id}`} className="text-slate-400 transition-colors hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-slate-400 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a href={site.phone.href} className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white">
                  <PhoneIcon className="h-4 w-4 text-brand-400" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white">
                  <MailIcon className="h-4 w-4 text-brand-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {site.address}
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary mt-6">
              <CalendarIcon className="h-4 w-4" />
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
