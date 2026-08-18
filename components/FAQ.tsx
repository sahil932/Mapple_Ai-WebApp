"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do I need to know anything about AI to work with you?",
    a: "Not at all. We handle all the technical side. You tell us what problems you want to solve in your business, and we take care of the rest — in plain language, every step of the way.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most projects start within one to two weeks of our first conversation. Simpler automations can be live in days. We give you a clear timeline before any work begins.",
  },
  {
    q: "What if I'm not sure which service I need?",
    a: "That's exactly what the free consultation is for. We'll look at your business together and tell you honestly where AI and automation can make the biggest difference — no pressure to commit.",
  },
  {
    q: "Will this work with the tools I already use?",
    a: "In most cases, yes. We build around your existing software — whether that's a CRM, scheduling system, email platform, or something custom — rather than asking you to change how you work.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the scope of the project. We don't have fixed packages because every business is different. After your free consultation, we'll give you a clear, itemised quote with no hidden fees.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We don't just hand over a finished product and disappear. We stay available to refine, update, and improve as your business grows and your needs change.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear a lot"
          subtitle="If yours isn't here, just ask — we're happy to talk it through."
        />

        <div className="mt-12 divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 40}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-[17px] font-semibold text-navy-900">{faq.q}</span>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-400 transition-colors group-hover:border-brand-200">
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${open === i ? "rotate-180 text-brand-600" : ""}`}
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 pb-5" : "max-h-0"}`}
                >
                  <p className="text-[16px] leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
