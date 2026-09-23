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
    <LegalLayout title="Privacy Policy" updated="September 21, 2026">
      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
        This policy explains how we collect, use, disclose, and protect personal information when
        you visit this website or contact us.
      </p>

      <H2>Information we collect</H2>
      <p>
        When you contact us through our website — for example, by submitting the contact form —
        we may collect the details you provide, such as your name, business name, email address,
        phone number, the service you&apos;re interested in, and any message you send. We may also
        collect limited technical information needed to operate and secure the website, such as
        browser type, device information, and server logs.
      </p>

      <H2>How we use your information</H2>
      <p>
        We use the information you provide to respond to your enquiry, provide the services you
        request, prepare proposals, communicate with you about a project, operate and secure the
        website, and improve our services. We do not sell or rent personal information.
      </p>

      <H2>Cookies</H2>
      <p>
        This website does not currently use advertising cookies. Our hosting provider may use
        essential technologies and server logs to deliver and protect the site. If analytics or
        other non-essential cookies are added later, this policy will be updated and any consent
        required by law will be requested.
      </p>

      <H2>How we share information</H2>
      <p>
        We may share information with service providers that host this website or deliver form
        messages and email. We may also disclose information where required by law, to protect our
        rights, or in connection with a business transaction. Providers may process information
        outside Ontario or Canada, where it may be subject to local laws.
      </p>

      <H2>Retention</H2>
      <p>
        We retain enquiry information only as long as reasonably necessary to respond, maintain
        business records, meet legal obligations, and resolve disputes. Retention periods depend
        on the nature of the enquiry and whether a business relationship is formed.
      </p>

      <H2>Data security</H2>
      <p>
        We take reasonable steps to protect the information we collect. However, no method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <H2>Your choices</H2>
      <p>
        Subject to applicable law, you may ask to access or correct your personal information, or
        withdraw consent where processing is based on consent. You may also opt out of
        non-essential communications. Contact us using the details below to make a request.
      </p>

      <H2>Children&apos;s privacy</H2>
      <p>
        This website and our business services are intended for businesses and are not directed
        to children. We do not knowingly collect personal information from children through this
        website.
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
