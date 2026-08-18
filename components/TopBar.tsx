import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, SparklesIcon } from "./Icons";

export default function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-slate-300 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px]">
        <p className="flex items-center gap-2 font-medium">
          <SparklesIcon className="h-3.5 w-3.5 text-brand-400" />
          {site.tagline}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.phone.href}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-brand-400" />
            {site.phone.display}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <MailIcon className="h-3.5 w-3.5 text-brand-400" />
            {site.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-3.5 w-3.5 text-brand-400" />
            {site.address}
          </span>
        </div>
      </div>
    </div>
  );
}
