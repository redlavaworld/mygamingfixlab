import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for MyGamingFixLab." };

export default function PrivacyPage() {
  return (
    <main className="shell section-space prose-page">
      <span className="eyebrow">Legal</span><h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> August 2026</p>
      <p>This template describes a typical content website setup. Review it with your actual analytics, advertising, newsletter and hosting configuration before publishing.</p>
      <h2>Information we may collect</h2><p>We may receive information you voluntarily send, such as email messages, and technical data generated when you use the site, such as browser type, device information, approximate location, pages viewed and referral information.</p>
      <h2>Analytics and advertising</h2><p>If analytics or advertising services are enabled, those providers may use cookies or similar technologies to measure traffic, prevent abuse, personalize or measure ads, and understand site performance. Update this section with the exact services you deploy.</p>
      <h2>Cookies</h2><p>The site may use necessary cookies and, where enabled with appropriate consent, analytics or advertising cookies. Your browser can usually block or delete cookies.</p>
      <h2>Third-party links</h2><p>Guides may link to external websites. Their privacy practices are governed by their own policies.</p>
      <h2>Data retention</h2><p>We keep information only as long as reasonably necessary for the purpose for which it was collected, legal obligations and security.</p>
      <h2>Contact</h2><p>For privacy questions, use the contact page.</p>
    </main>
  );
}
