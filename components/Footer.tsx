import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="footer-logo-link" aria-label="MyGamingFixLab home">
            <Image
              src="/mygamingfixlab-header-logo.png"
              alt="MyGamingFixLab"
              width={420}
              height={100}
              className="footer-logo"
            />
          </Link>
          <p>Clear gaming fixes, PC performance guides and server troubleshooting — built around useful diagnostics instead of guesswork.</p>
          <div className="footer-trust"><span>Independent</span><span>Safety-first</span><span>Search-focused</span></div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/game-fixes">Game Fixes</Link>
          <Link href="/pc-gaming">PC Gaming</Link>
          <Link href="/game-servers">Game Servers</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/search">Search</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} MyGamingFixLab. All rights reserved.</span>
        <span>Fix Games. Boost Performance. Play Better.</span>
      </div>
    </footer>
  );
}
