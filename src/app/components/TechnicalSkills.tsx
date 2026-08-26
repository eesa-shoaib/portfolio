import { skills } from "../lib/content";
import { BezelPanel } from "./BezelPanel";
import { Tag } from "./Tag";

export function TechnicalSkills() {
  return (
    <BezelPanel className="bg-neutral p-5 text-neutral-content border-neutral-content/20 md:p-7">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
        Technical skills
      </p>

      <div className="mt-5 space-y-4">
        {skills.map((group) => (
          <div key={group.category} className="grid gap-2 md:grid-cols-[120px_1fr] md:gap-4">
            <h3 className="font-mono text-base font-bold uppercase tracking-wide text-neutral-content/60">
              {group.category}
            </h3>
            <div className="space-y-1.5">
              <div className="flex flex-wrap gap-1.5">
                {group.primary.map((skill) => (
                  <Tag key={skill} className="border-accent/40 text-neutral-content">
                    {skill}
                  </Tag>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.secondary.map((skill) => (
                  <Tag key={skill} className="border-neutral-content/15 text-neutral-content/60">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BezelPanel>
  );
}
