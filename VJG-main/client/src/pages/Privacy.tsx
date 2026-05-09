import PageShell, { Section } from "@/components/PageShell";

export default function Privacy() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How VarchasLabs collects, uses, and protects your information. Last updated April 2026."
    >
      <Section>
        <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
          <h2>1. Information we collect</h2>
          <p>
            We collect information you provide directly — such as name, email, company, and message
            content via our contact and careers forms — and limited technical data (IP address,
            browser, device, referring URL) collected automatically when you use our website.
          </p>

          <h2>2. How we use information</h2>
          <ul>
            <li>To respond to inquiries and provide requested services.</li>
            <li>To recruit and evaluate candidates for open roles.</li>
            <li>To maintain, secure, and improve our website and services.</li>
            <li>To meet legal, regulatory, and contractual obligations.</li>
          </ul>

          <h2>3. Sharing & disclosure</h2>
          <p>
            We do not sell personal information. We share information only with trusted processors
            (e.g., email, analytics, hosting) under appropriate data-protection agreements, or when
            required by law.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes set out above, or as
            required by applicable law. Recruitment data is retained for up to 12 months unless you
            request earlier deletion.
          </p>

          <h2>5. Your rights</h2>
          <p>
            Subject to applicable law, you may request access, correction, deletion, restriction, or
            portability of your personal data, and you may object to certain processing. Contact{" "}
            <strong>privacy@varchaslabs.com</strong> to exercise these rights.
          </p>

          <h2>6. Security</h2>
          <p>
            We apply technical and organizational measures aligned with industry standards (encryption
            in transit, least-privilege access, monitored infrastructure) to protect personal data.
          </p>

          <h2>7. International transfers</h2>
          <p>
            Where data is transferred internationally, we use lawful transfer mechanisms such as
            Standard Contractual Clauses.
          </p>

          <h2>8. Updates</h2>
          <p>
            We may update this policy from time to time. Material changes will be highlighted on this
            page with a revised effective date.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions? Email <strong>privacy@varchaslabs.com</strong> or write to our registered
            office in Bangalore, India.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
