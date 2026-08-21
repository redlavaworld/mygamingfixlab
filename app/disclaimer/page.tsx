import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: "Editorial and affiliate disclaimer for MyGamingFixLab." };

export default function DisclaimerPage() {
  return (
    <main className="shell section-space prose-page">
      <span className="eyebrow">Transparency</span><h1>Disclaimer</h1>
      <h2>Independent publication</h2><p>MyGamingFixLab is an independent publication and is not affiliated with Rockstar Games, Valve, Facepunch Studios, Roblox Corporation, Microsoft or other companies mentioned unless explicitly stated.</p>
      <h2>Affiliate disclosure</h2><p>Some future links may be affiliate links. If you purchase through one of those links, the site may receive a commission at no additional cost to you. Affiliate relationships should be disclosed clearly near relevant content.</p>
      <h2>Advertising</h2><p>The site may display third-party advertising. Ads should be visually distinguishable from editorial content and do not represent an endorsement of every advertised product.</p>
      <h2>Technical risk</h2><p>Back up important files and settings before making technical changes. Never download replacement executables or DLL files from untrusted sources solely because a guide or forum post suggests it.</p>
    </main>
  );
}
