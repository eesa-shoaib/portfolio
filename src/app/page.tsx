import Link from "next/link";
import { BezelPanel } from "./components/BezelPanel";
import { BracketChip } from "./components/BracketChip";
import { summary } from "./lib/content";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100svh-96px)] max-w-6xl gap-8 px-5 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <BracketChip>Portfolio</BracketChip>
          <h1 className="font-mono text-5xl font-black uppercase leading-none text-base-content sm:text-6xl lg:text-7xl">
            Eesa Shoaib<span className="cursor-block ml-2 inline-block h-10 w-5 bg-primary align-baseline sm:h-12" />
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-base-content">{summary}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary bezel border-2 font-mono uppercase">
              View projects
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline bezel border-2 border-accent font-mono uppercase text-accent hover:bg-accent hover:text-accent-content"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <BezelPanel className="bg-base-200 p-5 border-neutral/30">
          <div className="terminal-screen min-h-[360px] p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              boot.profile
            </p>
            <div className="mt-8 space-y-4 font-mono text-base font-semibold uppercase">
              <div className="flex gap-4">
                <span className="shrink-0 text-neutral-content/50">name:</span>
                <span className="text-neutral-content">Eesa Shoaib</span>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-neutral-content/50">role:</span>
                <span className="text-neutral-content">Computer Science student</span>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-neutral-content/50">core:</span>
                <span className="text-neutral-content">Go / Flutter / NestJS / Node.js</span>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 text-neutral-content/50">data:</span>
                <span className="text-neutral-content">PostgreSQL / MySQL / T-SQL / Supabase</span>
              </div>
            </div>
          </div>
        </BezelPanel>
      </section>

    </main>
  );
}
