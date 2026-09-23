import { CalendarIcon, CheckIcon, PhoneIcon, UsersIcon } from "./Icons";

const workflow = [
  { label: "Caller details captured", detail: "Name, number, and service request" },
  { label: "Urgency identified", detail: "No heat · priority request" },
  { label: "Next step prepared", detail: "Appointment request sent to the team" },
];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[35rem]" aria-label="Example AI receptionist workflow">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(63,111,241,0.34),transparent_68%)] blur-2xl"
      />

      <div className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0b1228] shadow-[0_35px_100px_-38px_rgba(0,0,0,0.88)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="call-pulse h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-bold text-white">AI Receptionist</span>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-200">
            Example workflow
          </span>
        </div>

        <div className="p-3.5 sm:p-5">
          <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-5">
            <div className="flex min-w-0 items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
                  AM
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-extrabold text-navy-900">
                    Incoming customer call
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">After-hours · Hamilton, ON</span>
                </span>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                <PhoneIcon className="h-3.5 w-3.5" />
                Live
              </span>
            </div>

            <div className="space-y-3 py-4">
              <div className="mr-7 rounded-2xl rounded-tl-md bg-slate-100 px-3.5 py-3 text-[0.83rem] leading-relaxed text-slate-700 sm:mr-16 sm:text-sm">
                “Our furnace stopped working. Can someone come tomorrow morning?”
              </div>
              <div className="ml-7 rounded-2xl rounded-tr-md bg-brand-600 px-3.5 py-3 text-[0.83rem] leading-relaxed text-white sm:ml-16 sm:text-sm">
                “I can help with that. May I get your name, address, and the best number for your technician to call?”
              </div>
            </div>

            <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-2 text-sm font-extrabold text-navy-900">
                  <CalendarIcon className="h-4 w-4 shrink-0 text-brand-600" />
                  Appointment request created
                </span>
                <span className="shrink-0 text-xs font-bold text-brand-700">Tomorrow · 9–11 AM</span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-2.5">
            {workflow.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-3"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-400/12 text-emerald-300">
                  <CheckIcon className="h-4 w-4" strokeWidth={2.3} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-white sm:text-sm">{item.label}</span>
                  <span className="mt-0.5 block text-[0.68rem] text-slate-400 sm:text-xs">{item.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_22px_55px_-24px_rgba(15,23,42,0.55)] xl:flex">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-50 text-violet-600">
          <UsersIcon className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-semibold text-slate-500">Lead record</span>
          <span className="block text-sm font-extrabold text-navy-900">Ready for human follow-up</span>
        </span>
      </div>
    </div>
  );
}
