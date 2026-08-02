import { BezelPanel } from "./BezelPanel";
import { Tag } from "./Tag";

type ProjectCardProps = {
  name: string;
  tech: string[];
  bullets: string[];
};

export function ProjectCard({ name, tech, bullets }: ProjectCardProps) {
  return (
    <BezelPanel className="group h-full bg-base-200 p-5 border-neutral/30 transition-colors duration-150 hover:border-primary md:p-6">
      <div className="h-1 w-full bg-neutral transition-colors duration-150 group-hover:bg-primary" />
      <h2 className="mt-5 font-mono text-2xl font-bold uppercase text-base-content">
        {name}
      </h2>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
      <ul className="mt-5 list-square space-y-3 pl-5 text-base-content">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </BezelPanel>
  );
}
