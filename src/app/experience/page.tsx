// src/app/experience/page.tsx
import { BracketChip } from "../components/BracketChip";
import { TimelineEntry } from "../components/TimelineEntry";
import { timelineEntries } from "../lib/content";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>Experience</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        Experience
      </h1>

      <ol className="relative mt-12 space-y-10 border-l-2 border-neutral/25 pl-9">
        {timelineEntries.map((entry, index) => (
          <TimelineEntry
            key={`${entry.eyebrow}-${entry.title}`}
            index={index + 1}
            {...entry}
          />
        ))}
      </ol>
    </main>
  );
}
