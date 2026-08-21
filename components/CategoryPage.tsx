import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { categories, getCategoryArticles } from "@/lib/articles";

export default function CategoryPage({ slug }: { slug: string }) {
  const category = categories.find((c) => c.slug === slug);
  const posts = getCategoryArticles(slug);
  if (!category) return null;

  return (
    <main>
      <section className="page-hero compact-hero">
        <div className="shell">
          <span className="eyebrow">{category.icon} Knowledge Base</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>
      <div className="shell section-space">
        <div className="section-heading">
          <div><span className="eyebrow">Latest fixes</span><h2>{posts.length} practical guides</h2></div>
          <p>Clear troubleshooting steps designed to help you find the cause before changing random settings.</p>
        </div>
        <AdSlot />
        <div className="article-grid">
          {posts.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </div>
    </main>
  );
}
