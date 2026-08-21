import Link from "next/link";

export default function NotFound() {
  return <main className="shell section-space prose-page"><span className="eyebrow">404</span><h1>That guide isn&apos;t in the lab.</h1><p>The page may have moved or the URL may be incorrect.</p><p><Link className="button primary" href="/search">Search guides</Link></p></main>;
}
