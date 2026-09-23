"use client";

import Link from "next/link";
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
  CheckIcon,
} from "./Icons";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const empty = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const contactCards = [
  { icon: PhoneIcon, label: "Phone", value: site.phone.display, href: site.phone.href },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPinIcon, label: "Based in", value: site.location, href: undefined },
];

const consultationIncludes = [
  "A short review of your current workflow",
  "The best first use case to consider",
  "Clear next steps with no obligation",
];

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const update = (key: keyof typeof empty) => (event: { target: { value: string } }) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
    if (key === "name" || key === "email" || key === "message") {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
    if (status === "error") setStatus("idle");
  };

  const validate = () => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      next.message = "Please tell us how we can help.";
    } else if (form.message.trim().length < 10) {
      next.message = "Please add a little more detail (at least 10 characters).";
    }

    setErrors(next);
    const firstInvalid = (["name", "email", "message"] as const).find((field) => next[field]);
    if (firstInvalid) document.getElementById(firstInvalid)?.focus();
    return !firstInvalid;
  };

  const openEmailFallback = () => {
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service || "Not specified"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry from ${form.name || "a prospective client"}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!validate()) return;
    setStatus("sending");

    if (!configured) {
      openEmailFallback();
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
    "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-base text-navy-900 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-600/20 blur-[125px]" />
        <div className="absolute -right-48 top-12 h-96 w-96 rounded-full bg-violet-600/16 blur-[125px]" />
      </div>

      <div className="site-container section-space relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
        <div className="min-w-0">
          <span className="eyebrow !text-brand-200">
            <CalendarIcon className="h-3.5 w-3.5" />
            Free consultation
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Tell us where your business is getting stuck
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Share the calls, follow-up, data entry, or customer workflow you want to improve.
            We will help you identify a practical first step.
          </p>

          <ul className="mt-7 grid gap-3">
            {consultationIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-200">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/12 text-emerald-300">
                  <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            {contactCards.map((card) => {
              const ContactIcon = card.icon;
              const content = (
                <div className="glass-panel flex min-w-0 items-center gap-3 rounded-2xl p-3.5 transition-colors hover:bg-white/[0.08]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-400/12 text-brand-200">
                    <ContactIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-slate-500">
                      {card.label}
                    </span>
                    <span className="mt-0.5 block break-words text-sm font-bold text-white sm:text-base">
                      {card.value}
                    </span>
                  </span>
                </div>
              );

              return card.href ? (
                <a key={card.label} href={card.href}>
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <div className="min-w-0 rounded-[1.5rem] bg-white p-4 shadow-[0_35px_95px_-40px_rgba(0,0,0,0.75)] sm:p-7 lg:p-8">
          {status === "success" ? (
            <div
              className="flex min-h-[30rem] flex-col items-center justify-center px-3 text-center"
              role="status"
              aria-live="polite"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircleIcon className="h-9 w-9" />
              </span>
              <h3 className="font-display mt-5 text-2xl font-extrabold text-navy-900">
                {configured ? "Your message is on its way" : "Your email app is ready"}
              </h3>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
                {configured
                  ? "Thank you. We have received your enquiry and will respond as soon as possible."
                  : "A prepared email should have opened on your device. Review it and press send to complete your enquiry."}
              </p>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-7">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="font-display text-xl font-extrabold text-navy-900 sm:text-2xl">
                  Request your consultation
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  Required fields are marked with an asterisk.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy-900">
                      Full name <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Smith"
                      className={`${inputClass} ${errors.name ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100" : ""}`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-sm font-medium text-rose-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="business" className="mb-1.5 block text-sm font-bold text-navy-900">
                      Business name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      value={form.business}
                      onChange={update("business")}
                      placeholder="Smith Plumbing Co."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-navy-900">
                      Email <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@business.com"
                      className={`${inputClass} ${errors.email ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100" : ""}`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-sm font-medium text-rose-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-navy-900">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="(365) 883-4022"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy-900">
                    Service you are interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update("service")}
                    className={`${inputClass} appearance-none bg-[length:1.25rem] bg-[right_0.85rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select a service (optional)</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy-900">
                    What would you like to improve? <span className="text-brand-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="For example: We miss calls when technicians are in the field and need a better way to capture urgent requests."
                    className={`${inputClass} min-h-32 resize-y ${errors.message ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100" : ""}`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm font-medium text-rose-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700"
                  >
                    <AlertIcon className="mt-1 h-4 w-4 shrink-0" />
                    We could not send the message. Please try again, or email us directly at {site.email}.
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
                      Send consultation request
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  By sending this form, you agree that we may contact you about your enquiry.{" "}
                  <Link
                    href="/privacy"
                    className="inline-flex min-h-6 items-center font-bold text-brand-700 underline-offset-2 hover:underline"
                  >
                    Privacy policy
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
