"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/lib/articles";

export default function SearchClient({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) =>
      [article.title, article.excerpt, article.category].join(" ").toLowerCase().includes(q)
    );
  }, [query, articles]);

  return (
    <>
      <div className="search-panel">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try: Rust auth ticket, GTA V crash, Roblox DataStore…"
          aria-label="Search guides"
          autoFocus
        />
        <span>{results.length} guide{results.length === 1 ? "" : "s"}</span>
      </div>
      <div className="article-grid">
        {results.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
      {results.length === 0 && <div className="empty-state">No guides matched that search yet.</div>}
    </>
  );
}
