// src/components/TimelineEntry.tsx
import { BezelPanel } from "./BezelPanel";

type TimelineEntryProps = {
  index: number;
  eyebrow: string;
  title: string;
  date: string;
  bullets: string[];
};

export function TimelineEntry({ index, eyebrow, title, date, bullets }: TimelineEntryProps) {
  const isActive = date.toLowerCase().includes("present");

  return (
    <li className="relative">
      {/* Node sits on the rail line, shows entry index */}
      <span
        className={`absolute -left-[45px] top-0 flex h-7 w-7 items-center justify-center bezel-sm border-2 font-mono text-[11px] font-bold ${
          isActive
            ? "border-accent bg-accent text-accent-content"
            : "border-primary bg-base-100 text-primary"
        }`}
      >
        {String(index).padStart(2, "0")}
      </span>

      <BezelPanel className="bg-base-200 p-5 border-neutral/30 md:p-7">
        <div className="flex flex-col gap-2 border-b-2 border-neutral/25 pb-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
              {isActive && (
                <span className="flex items-center gap-1.5 bezel-sm border border-accent/50 px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                    Active
                  </span>
                </span>
              )}
            </div>
            <h2 className="mt-2 font-mono text-2xl font-bold uppercase text-base-content">
              {title}
            </h2>
          </div>
          <p className="whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-wide text-base-content/70">
            {date}
          </p>
        </div>

        {bullets.length > 0 && (
          <ul className="mt-5 space-y-3 text-base-content">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </BezelPanel>
    </li>
  );
}
