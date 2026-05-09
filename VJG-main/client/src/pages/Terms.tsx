import PageShell, { Section } from "@/components/PageShell";

export default function Terms() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms that govern your use of the VarchasLabs website and services. Last updated April 2026."
    >
      <Section>
        <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
          <h2>1. Acceptance of terms</h2>
          <p>
            By accessing or using <strong>varchaslabs.com</strong> (the "Site") or any of our
            services, you agree to be bound by these Terms of Service. If you do not agree, do not
            use the Site.
          </p>

          <h2>2. Use of the site</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a manner that does not infringe
            the rights of, restrict, or inhibit anyone else's use and enjoyment of it.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All content, trademarks, logos, and software on the Site are the property of VarchasLabs
            or its licensors and are protected by applicable IP laws. No license is granted except
            as expressly stated.
          </p>

          <h2>4. Engagements & deliverables</h2>
          <p>
            Paid engagements are governed by separately executed Master Service Agreements (MSAs) and
            Statements of Work (SOWs). In case of conflict, the MSA/SOW prevails over these Terms.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Information shared between you and VarchasLabs in the context of an engagement is
            considered confidential and handled per the relevant NDA or MSA confidentiality terms.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Site is provided "as is" without warranties of any kind, express or implied. We do
            not guarantee that the Site will be uninterrupted, error-free, or secure.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, VarchasLabs shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of the
            Site.
          </p>

          <h2>8. Indemnity</h2>
          <p>
            You agree to indemnify and hold VarchasLabs harmless from any claims arising out of your
            misuse of the Site or breach of these Terms.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These Terms are governed by the laws of India, with exclusive jurisdiction in the courts
            of Bangalore, Karnataka.
          </p>

          <h2>10. Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Site after changes are
            posted constitutes acceptance of the revised Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            For legal inquiries, email <strong>legal@varchaslabs.com</strong>.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
