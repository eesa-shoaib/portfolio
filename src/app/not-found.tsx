"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BracketChip } from "./components/BracketChip";

const suggestions = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="mx-auto flex min-h-[calc(100svh-96px)] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-8 text-center">
      <BracketChip>404</BracketChip>

      <div className="bezel scanline border-2 border-primary bg-base-300 mt-6 w-full max-w-lg p-6 text-left md:p-8">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
          error.log
        </p>
        <div className="mt-6 space-y-3 font-mono text-base font-semibold uppercase text-base-content">
          <p>
            <span className="text-primary">status:</span>{" "}
            <span>404</span>
          </p>
          <p>
            <span className="text-primary">message:</span>{" "}
            <span>page not found</span>
          </p>
          <p>
            <span className="text-primary">path:</span>{" "}
            <span>{pathname}</span>
          </p>
        </div>
        <div className="mt-8 border-t border-neutral-content/15 pt-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-accent transition-colors hover:text-accent-content"
          >
            <span className="text-primary">&gt;</span>
            return_home
            <span className="cursor-block inline-block h-4 w-2.5 bg-accent" />
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-base-content/40">
          or try one of these
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bezel-sm border border-neutral/30 px-4 py-2 font-mono text-xs font-bold uppercase text-base-content/70 transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
