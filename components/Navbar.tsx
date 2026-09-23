"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  Icon,
  ChevronDownIcon,
  CalendarIcon,
  MenuIcon,
  CloseIcon,
  PhoneIcon,
} from "./Icons";
import { site, nav, services } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[60] h-[4.5rem] border-b bg-white/95 backdrop-blur-xl transition-shadow ${
        scrolled
          ? "border-slate-200/80 shadow-[0_12px_35px_-24px_rgba(15,23,42,0.55)]"
          : "border-slate-100/80"
      }`}
    >
      <nav className="site-container flex h-full items-center justify-between" aria-label="Primary navigation">
        <Link href="/#home" aria-label="Mapple AI Solution home" onClick={closeMenu}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <li
                key={item.label}
                ref={servicesMenuRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-[0.9rem] font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-900"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls="desktop-services-menu"
                >
                  Services
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="desktop-services-menu"
                  className={`${servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"} absolute left-1/2 top-full w-[19rem] -translate-x-1/2 pt-3 transition-all duration-200`}
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_22px_60px_-24px_rgba(15,23,42,0.45)]">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={`#service-${service.id}`}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-white">
                          <Icon name={service.icon} className="h-[1.1rem] w-[1.1rem]" />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-navy-900">{service.title}</span>
                          <span className="mt-0.5 block text-xs text-slate-500">
                            {service.id === "receptionist"
                              ? "Answer, qualify, and route calls"
                              : service.short.split(".")[0]}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center rounded-lg px-3 text-[0.9rem] font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-900"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-brand-700 xl:flex"
          >
            <PhoneIcon className="h-4 w-4 text-brand-600" />
            {site.phone.display}
          </a>
          <a href="#contact" className="btn btn-primary min-h-11 px-4">
            <CalendarIcon className="h-4 w-4" />
            Free consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-navy-900 shadow-sm lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? "visible opacity-100" : "invisible opacity-0"} fixed inset-x-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-slate-100 bg-white transition-opacity duration-200 lg:hidden`}
      >
        <div className="site-container flex min-h-full flex-col py-5">
          <a
            href={site.phone.href}
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Speak with us
              </span>
              <span className="mt-0.5 block text-base font-extrabold text-navy-900">
                {site.phone.display}
              </span>
            </span>
          </a>

          <ul className="mt-4 divide-y divide-slate-100">
            {nav.map((item) =>
              item.label === "Services" ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    className="flex min-h-14 w-full items-center justify-between py-3 text-left text-base font-bold text-navy-900"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                  >
                    Services
                    <ChevronDownIcon
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div id="mobile-services-menu" className="grid gap-1 pb-3">
                      {services.map((service) => (
                        <a
                          key={service.id}
                          href={`#service-${service.id}`}
                          onClick={closeMenu}
                          className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                        >
                          <Icon name={service.icon} className="h-4 w-4 shrink-0 text-brand-600" />
                          {service.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-14 items-center py-3 text-base font-bold text-navy-900"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="mt-auto border-t border-slate-100 pt-5">
            <a href="#contact" onClick={closeMenu} className="btn btn-primary w-full">
              <CalendarIcon className="h-4 w-4" />
              Request a free consultation
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">
              Based in Hamilton, Ontario · Serving businesses across Canada
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
