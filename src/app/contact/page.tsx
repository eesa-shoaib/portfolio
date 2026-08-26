"use client";

import { useState, type FormEvent } from "react";
import { ExternalLink, Mail, MapPin, Send } from "lucide-react";
import { BezelPanel } from "../components/BezelPanel";
import { BracketChip } from "../components/BracketChip";

const contactLinks = [
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
  { icon: Mail, label: "Email", value: "eesa.shoaib@gmail.com", href: "mailto:eesa.shoaib@gmail.com" },
  { icon: ExternalLink, label: "GitHub", value: "github.com/eesa-shoaib", href: "https://github.com/eesa-shoaib" },
  { icon: ExternalLink, label: "LinkedIn", value: "linkedin.com/in/eesa-shoaib", href: "https://linkedin.com/in/eesa-shoaib" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:eesa.shoaib@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <BracketChip>Contact</BracketChip>
      <h1 className="mt-3 font-mono text-4xl font-black uppercase text-base-content md:text-6xl">
        Get in touch
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <BezelPanel className="bg-neutral p-5 text-neutral-content border-neutral-content/20 md:p-7">
          <div className="divide-y divide-neutral-content/15">
            {contactLinks.map(({ icon: Icon, label, value, href }) => {
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
                <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="block transition-colors hover:text-accent">
                  {row}
                </a>
              );
            })}
          </div>
        </BezelPanel>

        {/* Compose panel */}
        <BezelPanel className="overflow-hidden border-neutral/25 bg-base-200 p-0">
          <div className="flex items-center justify-between border-b border-neutral/25 bg-base-300 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            </div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-base-content/50">
              compose.msg
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-7">
            <div className="grid gap-4">
              <label className="form-control">
                <span className="mb-1.5 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                  <span className="text-accent">&gt;</span> Name
                </span>
                <input required type="text" name="name" placeholder="jane doe" className="input input-bordered bezel-sm border border-neutral/30 bg-base-100 font-mono placeholder:text-base-content/30 focus:border-accent focus:outline-none" />
              </label>

              <label className="form-control">
                <span className="mb-1.5 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                  <span className="text-accent">&gt;</span> Email
                </span>
                <input required type="email" name="email" placeholder="jane@example.com" className="input input-bordered bezel-sm border border-neutral/30 bg-base-100 font-mono placeholder:text-base-content/30 focus:border-accent focus:outline-none" />
              </label>

              <label className="form-control">
                <span className="mb-1.5 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-base-content/70">
                  <span className="text-accent">&gt;</span> Message
                </span>
                <textarea required name="message" placeholder="type your message..." className="textarea textarea-bordered bezel-sm min-h-32 border border-neutral/30 bg-base-100 font-mono placeholder:text-base-content/30 focus:border-accent focus:outline-none" />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-neutral/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
              {sent ? (
                <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Email client opened
                </p>
              ) : (
                <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-base-content/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Ready to transmit
                </p>
              )}
              <button type="submit" className="btn btn-primary bezel-sm w-full border-0 font-mono text-sm uppercase tracking-wide sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send message
              </button>
            </div>
          </form>
        </BezelPanel>
      </div>
    </main>
  );
}
