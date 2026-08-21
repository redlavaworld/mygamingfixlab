import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { articles, categories } from "@/lib/articles";

const labPrinciples = [
  ["01", "Identify the symptom", "Start with the exact error, crash behavior, log message or performance pattern."],
  ["02", "Test low-risk causes", "Check reversible settings, files, sessions and services before reinstalling or deleting data."],
  ["03", "Change one variable", "Retest after each change so you know what actually solved the problem."],
];

const toolIdeas = [
  ["Server RAM Planner", "Estimate sensible memory headroom from player count, map size and plugins."],
  ["Sensitivity Converter", "Move mouse sensitivity between popular games with consistent calculations."],
  ["FPS Troubleshooter", "Follow a guided diagnostic flow for low FPS, stutter and frame-time spikes."],
];

export default function Home() {
  const featured = articles.filter((article) => article.featured).slice(0, 3);
  const latest = articles.filter((article) => !article.featured).slice(0, 6);

  return (
    <main>
      <section className="hero hero-premium">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i /> Independent gaming troubleshooting lab</span>
            <h1>Fix the problem. <span>Get back in game.</span></h1>
            <p>
              Practical troubleshooting for game crashes, PC performance, Steam issues,
              GTA V mods, Rust servers and Roblox Studio — organized around real symptoms,
              safe checks and clear next steps.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/game-fixes">Browse game fixes <b>→</b></Link>
              <Link className="button secondary" href="/search">Search a problem</Link>
            </div>
            <div className="trust-row">
              <span>Step-by-step guides</span>
              <span>Safety-first fixes</span>
              <span>No fake download buttons</span>
            </div>
          </div>

          <div className="diagnostic-stage" aria-label="MyGamingFixLab troubleshooting method">
            <div className="stage-topline">
              <span>DIAGNOSTIC SESSION</span><b>LIVE METHOD</b>
            </div>
            <div className="terminal-window">
              <div className="terminal-dots"><i /><i /><i /></div>
              <p className="terminal-error">ERROR: Steam AuthTicketCanceled</p>
              <h2>Don&apos;t reinstall everything first.</h2>
              <p>Start with the simplest reversible checks, confirm what changed, then isolate the actual cause.</p>
            </div>
            <div className="diagnostic-steps">
              {labPrinciples.map(([number, title], index) => (
                <div className="diagnostic-step" key={number}>
                  <span>{number}</span><div><strong>{title}</strong><small>{index === 0 ? "Observe" : index === 1 ? "Isolate" : "Verify"}</small></div>
                </div>
              ))}
            </div>
            <div className="stage-status"><span><i /> Methodical troubleshooting</span><span>LOW-RISK FIRST</span></div>
          </div>
        </div>
      </section>

      <section className="topic-strip shell" aria-label="Popular topics">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <span>{category.icon}</span><div><strong>{category.name}</strong><small>{category.description.split(",")[0]}</small></div>
          </Link>
        ))}
      </section>

      <section className="shell section-space">
        <div className="section-heading">
          <div><span className="eyebrow"><i /> Popular categories</span><h2>Start where the problem is.</h2></div>
          <p>Focused topic hubs make it easier to find the right fix and help search engines understand exactly what each section covers.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className="category-card premium-card" href={`/${category.slug}`} key={category.slug}>
              <div className="category-card-head"><div className="category-icon">{category.icon}</div><span>→</span></div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="text-link">Explore guides</span>
            </Link>
          ))}
          <Link className="category-card premium-card tools-category" href="/tools">
            <div className="category-card-head"><div className="category-icon">🧪</div><span>→</span></div>
            <h3>Gaming Tools</h3>
            <p>Useful calculators and guided diagnostics designed to solve repeat gaming problems faster.</p>
            <span className="text-link">See tools roadmap</span>
          </Link>
        </div>
      </section>

      <section className="feature-section">
        <div className="shell section-space">
          <div className="section-heading">
            <div><span className="eyebrow"><i /> Featured troubleshooting</span><h2>High-value fixes to start with.</h2></div>
            <Link className="view-all" href="/search">View all guides →</Link>
          </div>
          <div className="article-grid featured-grid">
            {featured.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
          <AdSlot />
        </div>
      </section>

      <section className="shell section-space process-section">
        <div className="section-heading centered-heading">
          <div><span className="eyebrow"><i /> The FixLab method</span><h2>Troubleshoot with evidence, not guesses.</h2></div>
          <p>Every strong guide should move from symptom to cause with the fewest risky changes possible.</p>
        </div>
        <div className="process-grid">
          {labPrinciples.map(([number, title, description]) => (
            <div className="process-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <div className="section-heading">
          <div><span className="eyebrow"><i /> Latest from the lab</span><h2>Fresh guides and explainers.</h2></div>
          <Link className="view-all" href="/search">Search the knowledge base →</Link>
        </div>
        <div className="article-grid">
          {latest.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="tools-band">
        <div className="shell section-space tools-layout">
          <div className="tools-copy">
            <span className="eyebrow"><i /> Tools coming to the lab</span>
            <h2>Useful tools can earn repeat visitors.</h2>
            <p>Alongside search-focused guides, MyGamingFixLab is structured to grow into calculators and guided troubleshooters that give visitors a reason to return.</p>
            <Link className="button primary" href="/tools">Explore tools roadmap →</Link>
          </div>
          <div className="tools-preview">
            {toolIdeas.map(([title, text], index) => (
              <Link href="/tools" className="tool-preview-card" key={title}>
                <span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div><b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell final-cta-wrap">
        <div className="final-cta">
          <div><span className="eyebrow"><i /> Find the right fix</span><h2>Got a gaming problem?</h2><p>Search the lab by game, error message, performance symptom or server issue.</p></div>
          <div className="hero-actions"><Link className="button primary" href="/search">Search MyGamingFixLab →</Link><Link className="button secondary" href="/contact">Suggest a guide</Link></div>
        </div>
      </section>
    </main>
  );
}
