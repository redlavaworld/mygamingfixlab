import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Search Gaming Fixes",
  description: "Search MyGamingFixLab guides for game crashes, PC gaming issues, Steam, GTA V, Rust, Roblox and game servers.",
};

export default function SearchPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <div className="shell">
          <span className="eyebrow">Search the knowledge base</span>
          <h1>Find the guide you need.</h1>
          <p>Search by game, error message, symptom or platform.</p>
        </div>
      </section>
      <section className="shell section-space">
        <SearchClient articles={articles} />
      </section>
    </main>
  );
}
