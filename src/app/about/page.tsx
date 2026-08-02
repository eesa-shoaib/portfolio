import { BezelPanel } from "../components/BezelPanel";
import { BracketChip } from "../components/BracketChip";
import { TechnicalSkills } from "../components/TechnicalSkills";
import { timelineEntries, summary } from "../lib/content";

export default function AboutPage() {
  const education = timelineEntries.find((entry) => entry.title === "BS Computer Science");

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>About</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        About
      </h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <BezelPanel className="bg-base-200 p-5 border-neutral/30 md:p-7">
          <h2 className="font-mono text-2xl font-bold uppercase text-base-content">
            Eesa Shoaib
          </h2>
          <p className="mt-5 text-lg leading-8 text-base-content">{summary}</p>
          {education && (
            <div className="mt-8 border-t-2 border-neutral/30 pt-5">
              <BracketChip>Education</BracketChip>
              <h3 className="mt-3 font-mono text-xl font-bold uppercase text-base-content">
                {education.eyebrow}
              </h3>
              <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-wide text-base-content/75">
                {education.title}
              </p>
              <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-wide text-base-content/75">
                {education.date}
              </p>
            </div>
          )}
        </BezelPanel>
        <TechnicalSkills />
      </div>
    </main>
  );
}
