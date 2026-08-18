"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { site, serviceOptions } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  SendIcon,
  SpinnerIcon,
  CheckCircleIcon,
  AlertIcon,
  CalendarIcon,
} from "./Icons";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type Status = "idle" | "sending" | "success" | "error";

const empty = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const contactCards = [
  { icon: PhoneIcon, label: "Call us", value: site.phone.display, href: site.phone.href },
  { icon: MailIcon, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPinIcon, label: "Visit us", value: site.address, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [hp, setHp] = useState(""); // honeypot

  const update = (key: keyof typeof empty) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailtoFallback = () => {
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "Not specified"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${form.name || "website"}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (hp) {
      setStatus("success"); // silently drop bots
      return;
    }
    setStatus("sending");

    if (!configured) {
      mailtoFallback();
      setStatus("success");
      setForm(empty);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: form.name,
          business_name: form.business,
          reply_to: form.email,
          phone: form.phone,
          service: form.service || "Not specified",
          message: form.message,
        },
        { publicKey: PUBLIC_KEY as string }
      );
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="scroll-mt-4 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* info */}
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Contact Us
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-[2.4rem]">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Tell us a little about what you do and where you&apos;d like to save time or grow.
              We&apos;ll get back to you as soon as we can — no pressure, no jargon.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((c) => {
                const I = c.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-brand-200">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {c.label}
                      </span>
                      <span className="block text-[15px] font-semibold text-navy-900">{c.value}</span>
                    </span>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-navy-900 p-5 text-slate-200">
              <CalendarIcon className="h-6 w-6 shrink-0 text-brand-300" />
              <p className="text-sm leading-snug">
                Prefer to book a time directly? Mention your availability in the message and
                we&apos;ll set up a free consultation.
              </p>
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(2,6,23,0.35)] sm:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircleIcon className="h-9 w-9" />
                </span>
                <h3 className="font-display mt-5 text-2xl font-bold text-navy-900">
                  {configured ? "Message sent" : "Almost there"}
                </h3>
                <p className="mt-3 max-w-sm text-slate-600">
                  {configured
                    ? "Thanks for reaching out. We've received your message and will get back to you shortly."
                    : "Your email app should have opened with the details ready to send. Just press send and we'll take it from there."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-ghost mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Full name <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Business name
                    </label>
                    <input
                      id="business"
                      value={form.business}
                      onChange={update("business")}
                      placeholder="Smith Plumbing Co."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Email <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@business.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="(365) 883-4022"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Service you&apos;re interested in
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className={`${inputClass} appearance-none bg-[length:1.25rem] bg-[right_0.9rem_center] bg-no-repeat`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select a service (optional)</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    How can we help? <span className="text-brand-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us a bit about your business and what you'd like to improve…"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    <AlertIcon className="h-4 w-4 shrink-0" />
                    Something went wrong sending your message. Please try again, or email us
                    directly at {site.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <SpinnerIcon className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <SendIcon className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  By sending this, you agree to be contacted about your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
