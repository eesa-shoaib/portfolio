// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 py-4 sm:px-4">
      <div className="mx-auto max-w-6xl">
        {/* Clipped bezel bar — nothing that needs to overflow lives inside this */}
        <div className="bezel scanline border-2 border-primary bg-base-300">
          <nav className="relative z-10 flex min-h-16 items-center justify-between gap-3 px-3 py-3 sm:px-4 md:grid md:grid-cols-[auto_1fr_auto] md:px-5">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 border-r-2 border-neutral/30 pr-3 font-mono text-lg font-bold uppercase text-base-content sm:pr-4 sm:text-xl"
            >
              <span className="status-dot h-3 w-3 shrink-0 bg-accent" />
              sys
            </Link>

            {/* Mobile toggle button — no daisyUI dropdown, just state */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="btn btn-sm btn-outline gap-2 border-2 border-neutral font-mono font-bold uppercase md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              {open ? "Close" : "Menu"}
            </button>

            <div className="hidden items-center justify-center gap-2 md:flex">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 font-mono text-lg font-bold uppercase transition-colors duration-150 lg:text-xl ${
                      isActive ? "text-primary" : "text-base-content hover:text-accent"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary"
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href="/cv.pdf"
                download
                className="ml-2 flex items-center gap-1.5 border-2 border-neutral px-3 py-2 font-mono text-lg font-bold uppercase text-base-content transition-colors duration-150 hover:border-accent hover:text-accent lg:text-xl"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                CV
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile menu panel — sibling of the bezel bar, not a clipped child of it */}
        {open && (
          <div className="bezel scanline mt-2 border-2 border-primary bg-base-200 p-2 md:hidden">
            <ul className="flex flex-col">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-3 font-mono text-base font-bold uppercase transition-colors ${
                        isActive ? "text-primary" : "text-base-content hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-3 font-mono text-base font-bold uppercase text-base-content transition-colors hover:text-accent"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
