import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug && item.categorySlug === article.categorySlug)
    .slice(0, 3);

  return (
    <main>
      <div className="shell section-space article-layout">
        <article className="article-content">
          <span className="eyebrow">{article.category} troubleshooting guide</span>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.excerpt}</p>
          <div className="article-byline">
            <span>MyGamingFixLab Editorial Team</span>
            <span>{article.readTime}</span>
            <span>Difficulty: {article.difficulty}</span>
            <span>Updated {article.updated}</span>
          </div>

          <div className="article-body">
            <p>{article.intro}</p>
            <AdSlot label="Advertisement — article top" />
            <h2>Fix it step by step</h2>
            {article.steps.map((step, index) => (
              <section className="step-block" key={step.title}>
                <h3><span className="step-number">{index + 1}</span>{step.title}</h3>
                <p>{step.body}</p>
              </section>
            ))}

            {article.notes && (
              <aside className="note-box">
                <strong>Before you continue</strong>
                <ul>{article.notes.map((note) => <li key={note}>{note}</li>)}</ul>
              </aside>
            )}

            <AdSlot label="Advertisement — article middle" />
            <h2>Frequently asked questions</h2>
            {article.faq.map((item) => (
              <section className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </section>
            ))}

            {article.sources && article.sources.length > 0 ? (
              <section className="source-box">
                <h2>Official sources</h2>
                <p>These references were used to build and verify the troubleshooting order in this guide.</p>
                <ul>
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <div className="note-box">
                <strong>Editorial note</strong>
                <p>This guide is part of the starter knowledge base. Add your own testing notes, screenshots, exact version information and source links before promoting it as a verified production guide.</p>
              </div>
            )}


            {relatedArticles.length > 0 && (
              <section className="source-box">
                <h2>Related troubleshooting guides</h2>
                <p>Continue with closely related guides from the same topic hub.</p>
                <ul>
                  {relatedArticles.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/articles/${item.slug}`}>{item.title} →</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>In this guide</h3>
            <p>{article.steps.length} troubleshooting steps plus common questions.</p>
            <Link href={`/${article.categorySlug}`}>More {article.category} guides →</Link>
          </div>
          <div className="sidebar-card">
            <h3>Safety rule</h3>
            <p>Back up configs and saves before deleting files. Prefer official downloads and reversible changes.</p>
          </div>
          <AdSlot label="Sidebar advertisement" />
        </aside>
      </div>
    </main>
  );
}
