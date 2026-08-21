import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms of use for MyGamingFixLab." };

export default function TermsPage() {
  return (
    <main className="shell section-space prose-page">
      <span className="eyebrow">Legal</span><h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> August 2026</p>
      <p>By using MyGamingFixLab, you agree to use the information on the site responsibly and lawfully.</p>
      <h2>Informational content</h2><p>Guides are provided for general informational purposes. Software, games, operating systems and server platforms change frequently, so a guide may not match every version or configuration.</p>
      <h2>Your responsibility</h2><p>You are responsible for backups, account security, compliance with game/platform rules, and evaluating whether a configuration change is appropriate for your system.</p>
      <h2>Intellectual property</h2><p>Original site text, design and branding are protected by applicable law. Product names, game names and trademarks belong to their respective owners and are used for identification and commentary.</p>
      <h2>External services</h2><p>We are not responsible for third-party websites, downloads, hosting providers or services linked from the site.</p>
      <h2>Changes</h2><p>These terms may be updated as the website, monetization model or services evolve.</p>
    </main>
  );
}
