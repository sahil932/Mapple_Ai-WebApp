"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon, ChevronDownIcon, CalendarIcon, MenuIcon, CloseIcon, PhoneIcon } from "./Icons";
import { site, nav, services } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "border-slate-200 shadow-[0_6px_24px_-16px_rgba(2,6,23,0.5)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#home" aria-label={`${"Mapple AI"} home`}>
          <Logo />
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <li key={item.label} className="group relative">
                <button
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-medium text-slate-600 transition-colors group-hover:text-brand-700 group-focus-within:text-brand-700"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                {/* dropdown */}
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(2,6,23,0.4)]">
                    {services.map((s) => (
                      <a
                        key={s.id}
                        href={`#service-${s.id}`}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon name={s.icon} className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-navy-900">{s.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-brand-700"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-brand-700 xl:flex"
          >
            <PhoneIcon className="h-4 w-4 text-brand-600" />
            {site.phone.display}
          </a>
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
            <CalendarIcon className="h-4 w-4" />
            Book a Free Consultation
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-navy-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            {/* phone — first thing visible when menu opens */}
            <a
              href={site.phone.href}
              onClick={() => setOpen(false)}
              className="mb-3 flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-100 text-brand-600">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-medium text-slate-500">Call us free anytime</p>
                <p className="text-base font-bold text-brand-700">{site.phone.display}</p>
              </div>
            </a>
            <ul className="flex flex-col">
              {nav.map((item) =>
                item.label === "Services" ? (
                  <li key={item.label} className="border-b border-slate-50">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-3 text-base font-medium text-navy-900"
                    >
                      Services
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pb-2">
                        {services.map((s) => (
                          <a
                            key={s.id}
                            href={`#service-${s.id}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-slate-600 hover:bg-brand-50"
                          >
                            <Icon name={s.icon} className="h-4 w-4 text-brand-600" />
                            {s.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.label} className="border-b border-slate-50">
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-navy-900"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 w-full"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
