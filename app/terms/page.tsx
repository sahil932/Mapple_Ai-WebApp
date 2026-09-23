import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} website.`,
  robots: { index: false, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display pt-4 text-xl font-bold text-navy-900">{children}</h2>;
}

export default function TermsPage() {
  return (
    <LegalLayout title="Website Terms of Use" updated="September 21, 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your use of the {site.name} website. By
        accessing or using our website, you agree to these Terms.
      </p>

      <H2>Our services</H2>
      <p>
        {site.name} provides AI solutions, automation, web application development, and digital
        marketing services. Information on this website is provided for general purposes and does
        not constitute a binding offer. Specific project scope, deliverables, and pricing are
        agreed separately in writing.
      </p>

      <H2>No professional advice or guaranteed results</H2>
      <p>
        Website content is general information, not legal, financial, privacy, security, or other
        professional advice. Examples of possible outcomes are illustrative. Business and AI
        results vary, and we do not guarantee a particular level of savings, leads, revenue,
        uptime, or performance unless a written project agreement expressly states otherwise.
      </p>

      <H2>Use of the website</H2>
      <p>
        You agree to use our website lawfully and not to misuse it, interfere with its operation,
        or attempt to access it in an unauthorized way. You are responsible for the accuracy of
        any information you submit through the website.
      </p>

      <H2>Intellectual property</H2>
      <p>
        The content on this website, including text, graphics, logos, and design, is owned by or
        licensed to {site.name} and is protected by applicable laws. You may not reproduce or
        redistribute it without our permission.
      </p>

      <H2>Third-party links and services</H2>
      <p>
        Our website may link to or rely on third-party services. We are not responsible for the
        content, policies, or practices of third parties.
      </p>

      <H2>AI limitations and human review</H2>
      <p>
        AI systems can produce incorrect or incomplete outputs. Any solution described on this
        site should be configured with appropriate testing, monitoring, human review, and fallback
        procedures based on its intended use. Final responsibilities are set out in the applicable
        project agreement.
      </p>

      <H2>Disclaimers</H2>
      <p>
        Our website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the
        extent permitted by law, we make no warranties, express or implied, regarding the website
        or its content, including accuracy, reliability, or availability.
      </p>

      <H2>Limitation of liability</H2>
      <p>
        To the extent permitted by law, {site.name} will not be liable for any indirect,
        incidental, special, or consequential damages arising from your use of the website. These
        Terms do not limit rights or remedies that cannot lawfully be excluded.
      </p>

      <H2>Governing law</H2>
      <p>
        These Terms are governed by the laws of Ontario and the federal laws of Canada applicable
        there, without regard to conflict-of-law principles. Any dispute relating only to use of
        this website will be brought before a court of competent jurisdiction in Ontario, unless
        applicable law requires otherwise.
      </p>

      <H2>Changes to these terms</H2>
      <p>
        We may update these Terms from time to time. Continued use of the website after changes
        are posted constitutes acceptance of the updated Terms.
      </p>

      <H2>Contact us</H2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
          {site.email}
        </a>{" "}
        or {site.phone.display}.
      </p>
    </LegalLayout>
  );
}
