"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, PhoneIcon } from "./Icons";
import { site } from "@/lib/site";

export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-8px_30px_-10px_rgba(2,6,23,0.2)] transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <a
          href={site.phone.href}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-navy-900"
        >
          <PhoneIcon className="h-4 w-4 text-brand-600" />
          Call us
        </a>
        <a
          href="#contact"
          className="btn btn-primary flex-[2]"
        >
          <CalendarIcon className="h-4 w-4" />
          Book Free Consultation
        </a>
      </div>
    </div>
  );
}
