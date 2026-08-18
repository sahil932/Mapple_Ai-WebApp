// ============================================================
// Mapple AI Solution — central content & configuration.
// Edit copy, contact details, and section data here.
// ============================================================

export const site = {
  name: "Mapple AI Solution",
  shortName: "Mapple AI",
  tagline: "AI Solutions. Real Results.",
  // Change this to your real domain after deploying (used for SEO / sitemap / OG).
  url: "https://www.mappleaisolution.com",
  description:
    "Mapple AI Solution helps small and medium businesses save time and grow with AI automation, AI agents, an AI receptionist, custom web applications, and AI-assisted digital marketing.",
  phone: {
    display: "365-883-4022",
    href: "tel:+13658834022",
  },
  email: "mappleai.solution@gmail.com",
  address: "100 Main Street East, L8N 3W7",
  proofPoint: "AI & automation solutions deployed for 100+ customers",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Our Process", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceId =
  | "web"
  | "agents"
  | "receptionist"
  | "automation"
  | "marketing";

export interface Service {
  id: ServiceId;
  icon: string; // key into the icon map
  title: string;
  short: string; // card blurb
  summary: string; // longer paragraph for the detail block
  points: string[];
  formValue: string; // matches the contact form <option>
}

export const services: Service[] = [
  {
    id: "web",
    icon: "web",
    title: "Web Applications",
    short:
      "Modern, custom web applications built to fit how your business actually works — and to delight your customers.",
    summary:
      "We design and build responsive, easy-to-use web applications around your specific needs — from a polished business website to the internal tools your team relies on every day.",
    points: [
      "Business websites",
      "Customer portals",
      "Booking systems",
      "Internal dashboards",
      "Lead management systems",
      "Custom web applications",
    ],
    formValue: "Web Application",
  },
  {
    id: "agents",
    icon: "agents",
    title: "AI Agents",
    short:
      "Smart assistants that handle conversations and repetitive tasks, so your team can focus on customers and growth.",
    summary:
      "Think of an AI agent as a tireless helper for your business. It can hold helpful conversations, answer questions, qualify new leads, look up information, and move routine work forward — without adding to your team's plate.",
    points: [
      "Automate customer conversations",
      "Qualify and route new leads",
      "Answer common questions instantly",
      "Retrieve information on request",
      "Handle repetitive internal tasks",
      "Support your team's daily workflow",
    ],
    formValue: "AI Agent",
  },
  {
    id: "receptionist",
    icon: "receptionist",
    title: "AI Receptionist",
    short:
      "Never miss another call or inquiry. Greet customers, answer questions, and capture leads around the clock.",
    summary:
      "An AI receptionist helps you respond to incoming inquiries the moment they arrive. It can answer common questions, collect the caller's details, and help with appointment requests — so fewer opportunities slip through the cracks, even when your team is busy on a job.",
    points: [
      "Respond to incoming inquiries",
      "Answer frequently asked questions",
      "Capture caller and lead details",
      "Assist with appointment requests",
      "Reduce missed opportunities",
      "Great for plumbers, electricians & dental offices",
    ],
    formValue: "AI Receptionist",
  },
  {
    id: "automation",
    icon: "automation",
    title: "AI Automation",
    short:
      "Connect your tools and automate repetitive work, from lead follow-up to data entry and internal notifications.",
    summary:
      "We help you automate the repetitive processes that eat up your team's day and connect the different parts of your workflow so information flows automatically. The goal is simple: less manual work, and more time for customers and higher-value activities.",
    points: [
      "Lead follow-up",
      "Customer communication",
      "Appointment workflows",
      "Data entry & email automation",
      "CRM workflows",
      "Internal notifications",
    ],
    formValue: "AI Automation",
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "AI Digital Marketing",
    short:
      "Strengthen your online presence and lead generation with AI-assisted marketing that works quietly in the background.",
    summary:
      "We help you improve your digital presence and lead-generation efforts using AI-assisted marketing — from website content and social posts to email campaigns and follow-up that keeps prospects engaged.",
    points: [
      "Website content",
      "Lead-generation campaigns",
      "Social media content",
      "Email marketing",
      "Local business marketing",
      "Marketing workflow automation",
    ],
    formValue: "AI Digital Marketing",
  },
];

export const problems: { icon: string; label: string }[] = [
  { icon: "repeat", label: "Too many repetitive admin tasks" },
  { icon: "missed", label: "Missed customer inquiries" },
  { icon: "slow", label: "Slow lead follow-up" },
  { icon: "calendar", label: "Manual appointment workflows" },
  { icon: "disconnect", label: "Disconnected business systems" },
  { icon: "presence", label: "Limited online presence" },
  { icon: "people", label: "Staff stuck on repetitive work" },
  { icon: "chat", label: "Hard to keep up with customer messages" },
];

export interface Industry {
  icon: string;
  title: string;
  blurb: string;
  examples: string[];
}

export const industries: Industry[] = [
  {
    icon: "home",
    title: "Home Services",
    blurb:
      "Keep the phone answered and the schedule full while your crew is out on the job.",
    examples: ["Plumbers", "Electricians", "Contractors", "HVAC & similar trades"],
  },
  {
    icon: "tooth",
    title: "Healthcare & Dental",
    blurb:
      "Handle appointment requests and common questions for appointment-driven practices.",
    examples: ["Dental offices", "Clinics", "Other appointment-based practices"],
  },
  {
    icon: "briefcase",
    title: "Local & Professional Services",
    blurb:
      "Improve customer communication and streamline the internal work behind the scenes.",
    examples: ["Service businesses", "Local shops", "Professional practices"],
  },
];

export const whyUs: { icon: string; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Practical AI Solutions",
    body: "We focus on solving real business problems — not adding technology just for the sake of it.",
  },
  {
    icon: "workflow",
    title: "Built Around Your Workflow",
    body: "Solutions are shaped to fit how your business actually operates, day to day.",
  },
  {
    icon: "badge",
    title: "Automation Experience",
    body: "We've deployed AI and automation solutions for 100+ customers across service-based businesses.",
  },
  {
    icon: "lifebuoy",
    title: "End-to-End Support",
    body: "From understanding the problem through implementation and ongoing improvement, we stay with you.",
  },
];

export const process: { title: string; body: string }[] = [
  {
    title: "Discovery",
    body: "We learn your business, your current process, and the biggest challenges slowing you down.",
  },
  {
    title: "Solution Design",
    body: "We identify where AI, automation, web technology, or digital marketing can create real value.",
  },
  {
    title: "Build & Integrate",
    body: "We develop the solution and connect it cleanly with your existing business workflow.",
  },
  {
    title: "Launch & Improve",
    body: "We deploy it, then keep refining based on how it performs in real, day-to-day use.",
  },
];

export const serviceOptions: string[] = [
  "Web Application",
  "AI Agent",
  "AI Receptionist",
  "AI Automation",
  "AI Digital Marketing",
  "Not Sure / Need Consultation",
];
