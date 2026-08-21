import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "About MyGamingFixLab and its editorial approach." };

export default function AboutPage() {
  return (
    <main className="shell section-space prose-page">
      <span className="eyebrow">About the lab</span>
      <h1>Gaming help that respects your time.</h1>
      <p>MyGamingFixLab is an independent troubleshooting website focused on PC gaming, Steam, GTA V, Rust, Roblox Studio and self-hosted game servers.</p>
      <h2>Our approach</h2>
      <p>Good troubleshooting starts with the least invasive checks, explains why a step matters, and avoids pretending that one fix works for every machine. Guides should be updated when software changes and should clearly distinguish tested information from general suggestions.</p>
      <h2>Editorial standards</h2>
      <ul>
        <li>Prefer official downloads and documentation where available.</li>
        <li>Avoid destructive steps until safer checks have been exhausted.</li>
        <li>Disclose affiliate relationships and advertising.</li>
        <li>Correct outdated guides when versions or behavior change.</li>
        <li>Do not use fake download buttons or misleading ads.</li>
      </ul>
      <h2>How guides are built</h2>
      <p>We start with the exact symptom, prefer official documentation and support material, and order troubleshooting from reversible checks to more invasive changes. When a guide is based on vendor documentation rather than first-hand testing, the relevant official sources are linked on the page.</p>
      <h2>Corrections and transparency</h2>
      <p>Software changes quickly. If a documented step, menu path or requirement has changed, use the Contact page and include the guide URL, current version and the exact behavior you observed. We review corrections before updating a guide.</p>
    </main>
  );
}
