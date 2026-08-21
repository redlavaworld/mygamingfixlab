import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact MyGamingFixLab." };

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero compact-hero"><div className="shell"><span className="eyebrow">Contact</span><h1>Found a broken fix or a new issue?</h1><p>Corrections, guide suggestions and partnership enquiries are welcome.</p></div></section>
      <section className="shell section-space contact-grid">
        <article className="contact-card"><h2>Editorial & corrections</h2><p>Send the exact guide URL, game/software version, error text and what changed. Clear reproduction details make corrections faster.</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></article>
        <article className="contact-card"><h2>Business & partnerships</h2><p>For sponsorship or affiliate enquiries, include the product, audience fit and disclosure requirements. Paid relationships never guarantee positive coverage.</p><a href={`mailto:${siteConfig.email}`}>Contact the site</a></article>
      </section>
    </main>
  );
}
