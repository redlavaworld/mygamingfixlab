import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming Tools",
  description: "Free gaming and server utilities planned for MyGamingFixLab.",
};

const tools = [
  ["Rust Server RAM Estimator", "Estimate a starting memory range from map size, players and plugins."],
  ["Mouse Sensitivity Converter", "Convert sensitivity between popular games while preserving a consistent feel."],
  ["FPS Bottleneck Checklist", "Walk through a simple decision tree for CPU, GPU, RAM, thermals and storage."],
  ["Port Forwarding Planner", "Organize game, query and RCON ports before configuring a router or firewall."],
  ["PC Upgrade Priority Helper", "Use symptoms and workload to identify the component most likely limiting performance."],
  ["Error Log Cleaner", "Format a pasted game/server log into a compact block that is easier to share and inspect."],
];

export default function ToolsPage() {
  return (
    <main>
      <section className="page-hero compact-hero"><div className="shell"><span className="eyebrow">Useful utilities</span><h1>Tools that solve small problems fast.</h1><p>This area is ready for interactive utilities. The cards below are a professional roadmap rather than fake working tools.</p></div></section>
      <section className="shell section-space">
        <div className="tools-grid">
          {tools.map(([name, desc]) => <article className="tool-card" key={name}><span className="status">Planned</span><h2>{name}</h2><p>{desc}</p></article>)}
        </div>
      </section>
    </main>
  );
}
