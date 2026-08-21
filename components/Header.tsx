import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Game Fixes", "/game-fixes"],
  ["PC Gaming", "/pc-gaming"],
  ["GTA V", "/gta-v"],
  ["Rust", "/rust"],
  ["Roblox", "/roblox"],
  ["Steam", "/steam"],
  ["Servers", "/game-servers"],
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand brand-image-link" aria-label="MyGamingFixLab home">
          <Image
            src="/mygamingfixlab-header-logo.png"
            alt="MyGamingFixLab"
            width={420}
            height={100}
            priority
            className="header-logo"
          />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <Link className="search-button" href="/search">Search</Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/tools">Tools</Link>
            <Link href="/search">Search</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
