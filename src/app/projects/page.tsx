"use client";

import { useState } from "react";
import { BracketChip } from "../components/BracketChip";
import { FilterTabs } from "../components/FilterTabs";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../lib/content";

const filterTabs = ["Go", "C#", "Flutter", "C++17", "Next.js", "PostgreSQL"];

export default function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tech.some((t) => t.includes(active)))
    : projects;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>Projects</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        Projects
      </h1>

      <FilterTabs items={filterTabs} active={active} onChange={setActive} />

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 font-mono text-sm text-base-content/40">
          No projects found for this filter.
        </p>
      )}
    </main>
  );
}
