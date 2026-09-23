import { ArrowRightIcon, Icon, SparklesIcon } from "./Icons";
import Reveal from "./Reveal";

const transformations = [
  {
    icon: "missed",
    before: "Calls go to voicemail while your team is on a job",
    after: "Customers get an immediate response and their details are captured",
  },
  {
    icon: "slow",
    before: "New leads wait hours or days for follow-up",
    after: "Every enquiry is acknowledged, organized, and assigned a next step",
  },
  {
    icon: "repeat",
    before: "Staff copy information between forms, inboxes, and spreadsheets",
    after: "Connected workflows move the right data automatically",
  },
  {
    icon: "disconnect",
    before: "Owners piece together performance from disconnected tools",
    after: "One clear view shows leads, tasks, and follow-up status",
  },
];

export default function Problems() {
  return (
    <section className="section-space bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <span className="eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            What changes
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Turn everyday friction into a clear workflow
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Good automation should feel simple: fewer missed opportunities, less copying and
            chasing, and a clearer next step for your team.
          </p>
          <a href="#contact" className="btn btn-secondary mt-7 w-full sm:w-auto">
            Show us your current process
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid gap-4">
          {transformations.map((item, index) => (
            <Reveal key={item.before} delay={(index % 2) * 60}>
              <article className="rounded-2xl border border-slate-200 bg-[#fbfcff] p-4 sm:p-5">
                <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-slate-400">
                        Before
                      </span>
                      <span className="mt-1 block text-sm font-semibold leading-6 text-slate-700">
                        {item.before}
                      </span>
                    </span>
                  </div>

                  <span className="grid h-9 w-9 rotate-90 place-items-center rounded-full bg-brand-50 text-brand-600 sm:rotate-0">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>

                  <div className="flex min-w-0 items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon name="checkCircle" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700">
                        With Mapple AI
                      </span>
                      <span className="mt-1 block text-sm font-semibold leading-6 text-navy-900">
                        {item.after}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
