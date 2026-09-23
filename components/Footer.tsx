import Link from "next/link";
import { Logo } from "./Logo";
import { site, services, nav } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030611] text-slate-300">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_1.2fr] lg:gap-8">
          <div className="min-w-0">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              AI receptionists, connected automation, custom web applications, and practical
              digital systems for service businesses.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-brand-200 hover:text-white"
            >
              Request a free consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">Solutions</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/#service-${service.id}`}
                    className="inline-flex min-h-11 items-center text-slate-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">Company</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {nav
                .filter((item) => item.label !== "Home" && item.label !== "Services")
                .map((item) => (
                  <li key={item.label}>
                    <a
                      href={`/${item.href}`}
                      className="inline-flex min-h-11 items-center text-slate-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">Contact</h3>
            <ul className="mt-4 grid gap-4 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="flex min-h-11 min-w-0 items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 min-w-0 items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span className="min-w-0 break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-3 text-slate-400">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
