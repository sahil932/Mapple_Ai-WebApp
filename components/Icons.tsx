import { type ComponentType, type ReactNode } from "react";

type IconProps = { className?: string; strokeWidth?: number };

function Svg({
  className,
  strokeWidth = 1.75,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ---------------- UI / contact ---------------- */
export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.24 14 14 0 0 0 6.39 6.38z" />
  </Svg>
);
export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </Svg>
);
export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);
export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
);
export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);
export const CheckCircleIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </Svg>
);
export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);
export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);
export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);
export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);
export const SendIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4Z" />
  </Svg>
);
export const SparklesIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M11.5 3.2a.5.5 0 0 1 .95 0l1.2 3.6a2 2 0 0 0 1.27 1.27l3.6 1.2a.5.5 0 0 1 0 .95l-3.6 1.2a2 2 0 0 0-1.27 1.27l-1.2 3.6a.5.5 0 0 1-.95 0l-1.2-3.6a2 2 0 0 0-1.27-1.27l-3.6-1.2a.5.5 0 0 1 0-.95l3.6-1.2a2 2 0 0 0 1.27-1.27z" />
    <path d="M19 15v3M20.5 16.5h-3M6 3v2M7 4H5" />
  </Svg>
);
export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);
export const SpinnerIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={2}>
    <path d="M21 12a9 9 0 1 1-6.22-8.56" />
  </Svg>
);
export const AlertIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4M12 17h.01" />
  </Svg>
);

/* ---------------- Services ---------------- */
export const WebIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 9h20M5.5 6.5h.01M8 6.5h.01" />
    <path d="M7 13.5 9 15l-2 1.5M12 16.5h4" strokeWidth={1.4} />
  </Svg>
);
export const BotIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="8" width="16" height="12" rx="3" />
    <path d="M12 8V5" />
    <circle cx="12" cy="3.5" r="1.5" />
    <path d="M2 13h2M20 13h2" />
    <circle cx="9" cy="13.5" r="1" />
    <circle cx="15" cy="13.5" r="1" />
    <path d="M9.5 17h5" />
  </Svg>
);
export const HeadsetIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z" />
    <path d="M20 13a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
    <path d="M18 19a3 3 0 0 1-3 3h-2" />
  </Svg>
);
export const GearIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);
export const MegaphoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m21 5-9 4v6l9 4V5z" />
    <path d="M12 9H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6" />
    <path d="M8 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2" />
  </Svg>
);

/* ---------------- Problems ---------------- */
export const RepeatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </Svg>
);
export const PhoneOffIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2A19 19 0 0 1 3.05 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11z" />
    <path d="m2 2 20 20" />
  </Svg>
);
export const TimerIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 2h4" />
    <circle cx="12" cy="14" r="8" />
    <path d="M12 14v-4" />
  </Svg>
);
export const LinkOffIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 0 1 4 8" />
    <path d="M8 12h4" />
    <path d="m2 2 20 20" />
  </Svg>
);
export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </Svg>
);
export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);
export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8M8 12.5h5" strokeWidth={1.4} />
  </Svg>
);

/* ---------------- Industries ---------------- */
export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
  </Svg>
);
export const ToothIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5.2C10.2 3.4 7.4 3.4 6 5.1 4.6 6.9 4.7 10.5 5.6 14.6c.4 1.8.8 5.4 2 5.4s1.2-2.9 1.7-4.4c.3-.9.6-1.6 2.7-1.6s2.4.7 2.7 1.6c.5 1.5.5 4.4 1.7 4.4s1.6-3.6 2-5.4c.9-4.1 1-7.7-.4-9.5-1.4-1.7-4.2-1.7-6-.1Z" />
  </Svg>
);
export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M2 13h20" />
  </Svg>
);

/* ---------------- Why us ---------------- */
export const TargetIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" />
  </Svg>
);
export const WorkflowIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M10 6.5h4a3 3 0 0 1 3 3V14" />
  </Svg>
);
export const ShieldCheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);
export const LifebuoyIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="m4.9 4.9 4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2" />
  </Svg>
);

/* ---------------- Process ---------------- */
export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);
export const PencilIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
  </Svg>
);
export const BlocksIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1.4" />
    <rect x="13" y="3" width="8" height="8" rx="1.4" />
    <rect x="8" y="13" width="8" height="8" rx="1.4" />
  </Svg>
);
export const RocketIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 8-10c3 0 5 2 5 5a22 22 0 0 1-10 8Z" />
    <path d="M9 12H4s.55-3.03 2-4a4.05 4.05 0 0 1 3 0" />
    <circle cx="15" cy="9" r="1" />
  </Svg>
);

/* ---------------- Registry ---------------- */
const ICONS: Record<string, ComponentType<IconProps>> = {
  phone: PhoneIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  calendar: CalendarIcon,
  arrowRight: ArrowRightIcon,
  check: CheckIcon,
  checkCircle: CheckCircleIcon,
  send: SendIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  // services
  web: WebIcon,
  agents: BotIcon,
  receptionist: HeadsetIcon,
  automation: GearIcon,
  marketing: MegaphoneIcon,
  // problems
  repeat: RepeatIcon,
  missed: PhoneOffIcon,
  slow: TimerIcon,
  disconnect: LinkOffIcon,
  presence: GlobeIcon,
  people: UsersIcon,
  chat: ChatIcon,
  // industries
  home: HomeIcon,
  tooth: ToothIcon,
  briefcase: BriefcaseIcon,
  // why
  target: TargetIcon,
  workflow: WorkflowIcon,
  badge: ShieldCheckIcon,
  lifebuoy: LifebuoyIcon,
  // process
  search: SearchIcon,
  pencil: PencilIcon,
  blocks: BlocksIcon,
  rocket: RocketIcon,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? SparklesIcon;
  return <Cmp className={className} />;
}
