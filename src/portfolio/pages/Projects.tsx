type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
};

const projects: Project[] = [
  {
    name: "LaunchPad Analytics",
    description:
      "Data-rich dashboard for tracking SaaS growth metrics with real-time cohort analysis and goal tracking.",
    url: "https://example.com/launchpad",
    stack: ["React", "TypeScript", "D3.js", "TailwindCSS"]
  },
  {
    name: "Atlas Commerce",
    description:
      "Headless e-commerce storefront with server-side rendering, progressive enhancement, and localized content.",
    url: "https://example.com/atlas",
    stack: ["Next.js", "Edge Functions", "Stripe", "i18n"]
  },
  {
    name: "Waypoint Ops",
    description:
      "Operational tooling that orchestrates on-call workflows, automates runbooks, and surfaces SLO regressions.",
    url: "https://example.com/waypoint",
    stack: ["Express", "PostgreSQL", "GraphQL", "React"]
  }
];

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Projects</h2>
        <p className="text-base text-slate-300">
          Selected work highlighting my approach to building scalable, resilient products end to end.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/40 transition-colors hover:border-primary/60"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
              >
                View case study &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
