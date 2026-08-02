import { ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";
import { BezelPanel } from "../components/BezelPanel";
import { BracketChip } from "../components/BracketChip";

const contacts = [
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
  { icon: Mail, label: "Email", value: "eesa.shoaib@gmail.com", href: "mailto:eesa.shoaib@gmail.com" },
  { icon: ExternalLink, label: "GitHub", value: "github.com/eesa-shoaib", href: "https://github.com/eesa-shoaib" },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/eesa-shoaib-6705582a0",
    href: "https://linkedin.com/in/eesa-shoaib-6705582a0",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>Contact</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        Get in touch
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <BezelPanel className="bg-neutral p-5 text-neutral-content border-neutral-content/20 md:p-7">
          <div className="divide-y divide-neutral-content/15">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const row = (
                <div className="flex items-center gap-3 py-3.5">
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-content/50">
                      {label}
                    </p>
                    <p className="truncate font-mono text-sm font-medium text-neutral-content">
                      {value}
                    </p>
                  </div>
                </div>
              );

              if (!href) {
                return <div key={label}>{row}</div>;
              }

              const external = href.startsWith("http");

              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="block transition-colors hover:text-accent"
                >
                  {row}
                </a>
              );
            })}
          </div>
        </BezelPanel>

        <BezelPanel as="form" className="bg-base-200 p-5 border-neutral/25 md:p-7">
          <div className="grid gap-4">
            <label className="form-control">
              <span className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                Name
              </span>
              <input
                type="text"
                name="name"
                className="input input-bordered bezel-sm border border-neutral/30 bg-base-100"
              />
            </label>
            <label className="form-control">
              <span className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="input input-bordered bezel-sm border border-neutral/30 bg-base-100"
              />
            </label>
            <label className="form-control">
              <span className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                Message
              </span>
              <textarea
                name="message"
                className="textarea textarea-bordered bezel-sm min-h-32 border border-neutral/30 bg-base-100"
              />
            </label>
            <button type="submit" className="btn btn-primary bezel-sm border-0 font-mono text-sm uppercase tracking-wide">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send message
            </button>
          </div>
        </BezelPanel>
      </div>
    </main>
  );
}
