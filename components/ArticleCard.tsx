import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="article-card-top">
        <span className="tag">{article.category}</span>
        <span className="difficulty">{article.difficulty}</span>
      </div>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <div className="article-meta">
        <span>{article.readTime}</span>
        <span>Updated {article.updated}</span>
      </div>
      <Link className="text-link" href={`/articles/${article.slug}`}>Read guide →</Link>
    </article>
  );
}
