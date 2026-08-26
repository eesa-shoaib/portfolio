import { BracketChip } from "../components/BracketChip";

function SkeletonCard() {
  return (
    <div className="bezel border-2 border-neutral/30 bg-base-200 p-5 md:p-6">
      <div className="skeleton h-1 w-full rounded-none" />
      <div className="mt-5 flex items-center justify-between">
        <div className="skeleton h-7 w-40 rounded-none" />
        <div className="skeleton h-5 w-5 rounded-none" />
      </div>
      <div className="mt-4 flex gap-1.5">
        <div className="skeleton h-6 w-14 rounded-none" />
        <div className="skeleton h-6 w-16 rounded-none" />
        <div className="skeleton h-6 w-20 rounded-none" />
      </div>
      <div className="mt-5 space-y-3 pl-5">
        <div className="skeleton h-3 w-full rounded-none" />
        <div className="skeleton h-3 w-full rounded-none" />
        <div className="skeleton h-3 w-3/4 rounded-none" />
      </div>
    </div>
  );
}

export default function ProjectsLoading() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>Projects</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        Projects
      </h1>

      {/* Tab skeletons */}
      <div className="mt-6 flex gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="skeleton h-8 w-16 rounded-none" />
        ))}
      </div>

      {/* Card skeletons */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
