"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do I need to understand AI before we talk?",
    a: "No. Tell us where customers or staff get stuck, and we will translate the technology into a practical workflow in plain language.",
  },
  {
    q: "How quickly can a project get started?",
    a: "Timing depends on the workflow and the systems involved. A focused automation may take days to configure, while a custom application or multi-step integration can take longer. You receive a clear scope and timeline before work begins.",
  },
  {
    q: "What if I am not sure which service I need?",
    a: "That is normal. The first consultation is designed to identify the problem, estimate its value, and decide whether AI, automation, a web application, or a simpler process change is the right fit.",
  },
  {
    q: "Can you work with the software we already use?",
    a: "Often, yes. We first review your CRM, scheduling, email, forms, phone, and reporting tools. We then recommend what can be connected and clearly flag any technical limitation.",
  },
  {
    q: "How much does a solution cost?",
    a: "Cost depends on the scope, integrations, usage, and support required. After the consultation, you receive a written proposal that separates setup work from any ongoing software or support cost.",
  },
  {
    q: "What happens after launch?",
    a: "We test the workflow, document it, monitor early performance, and remain available for agreed support and improvements. Human handoff and fallback steps are planned before launch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-space bg-[#f7f9fd]">
      <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Clear answers before you commit"
          subtitle="If your question is not here, include it in your consultation request and we will answer it directly."
          align="left"
        />

        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            return (
              <Reveal key={faq.q} delay={(index % 3) * 35}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-[0.98rem] font-extrabold leading-6 text-navy-900 sm:text-base">
                      {faq.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-500">
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform ${expanded ? "rotate-180 text-brand-600" : ""}`}
                      />
                    </span>
                  </button>
                  {expanded && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5"
                    >
                      <p className="text-[0.96rem] leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
