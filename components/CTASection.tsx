import { site } from "@/lib/site";
import { CalendarIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-50" />
              <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-600/25 blur-[110px]" />
              <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-600/25 blur-[110px]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-[2.6rem]">
                Ready to automate your business?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Book a free consultation and we&apos;ll look at where AI and automation can save
                you the most time — no pressure, no jargon.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="#contact" className="btn btn-primary">
                  <CalendarIcon className="h-4 w-4" />
                  Book a Free Consultation
                </a>
                <a href={site.phone.href} className="btn btn-ghost-light">
                  <PhoneIcon className="h-4 w-4" />
                  Call {site.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
