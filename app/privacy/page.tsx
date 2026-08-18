import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  robots: { index: false, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display pt-4 text-xl font-bold text-navy-900">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        This page is a general template provided to help you launch. It is not legal advice.
        Please review and customize it — ideally with a professional — before relying on it.
      </div>

      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
        This policy explains what information we collect through our website, how we use it, and
        the choices you have.
      </p>

      <H2>Information we collect</H2>
      <p>
        When you contact us through our website — for example, by submitting the contact form —
        we may collect the details you provide, such as your name, business name, email address,
        phone number, the service you&apos;re interested in, and any message you send. We may also
        collect basic technical information such as your browser type and general usage data.
      </p>

      <H2>How we use your information</H2>
      <p>
        We use the information you provide to respond to your enquiry, provide the services you
        request, communicate with you about your project, and improve our website and services.
        We do not sell your personal information.
      </p>

      <H2>Cookies and analytics</H2>
      <p>
        Our website may use cookies or similar technologies to help it function and to understand
        how visitors use it. You can control cookies through your browser settings. If we add
        analytics tools, they may collect aggregated, non-identifying usage information.
      </p>

      <H2>How we share information</H2>
      <p>
        We may share information with trusted service providers who help us operate our website
        and communicate with you (for example, email or form-delivery services), and where
        required by law. These providers are expected to protect your information and use it only
        as needed to provide their services.
      </p>

      <H2>Data security</H2>
      <p>
        We take reasonable steps to protect the information we collect. However, no method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <H2>Your choices</H2>
      <p>
        You may request access to, correction of, or deletion of the personal information you
        have provided to us by contacting us using the details below. You can also opt out of
        non-essential communications at any time.
      </p>

      <H2>Third-party links</H2>
      <p>
        Our website may contain links to other sites. We are not responsible for the privacy
        practices of those sites and encourage you to review their policies.
      </p>

      <H2>Changes to this policy</H2>
      <p>
        We may update this policy from time to time. Any changes will be posted on this page with
        an updated revision date.
      </p>

      <H2>Contact us</H2>
      <p>
        If you have any questions about this policy, please contact us at{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
          {site.email}
        </a>{" "}
        or {site.phone.display}.
      </p>
    </LegalLayout>
  );
}
