"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="bezel scanline mx-auto max-w-6xl border-2 border-primary bg-base-300">
        <nav className="relative z-10 flex min-h-16 items-center justify-between gap-4 px-4 py-3 md:grid md:grid-cols-[auto_1fr_auto] md:px-5">
          <Link
            href="/"
            className="flex items-center gap-2 border-r-2 border-neutral/30 pr-4 font-mono text-xl font-bold uppercase text-base-content"
          >
            <span className="status-dot h-3 w-3 bg-accent" />
            sys
          </Link>

          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-outline border-2 border-neutral font-mono font-bold uppercase"
            >
              Menu
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bezel z-10 mt-3 w-56 border-2 border-primary bg-base-200 p-2"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-mono font-bold uppercase ${
                      pathname === link.href ? "text-primary" : "text-base-content"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
          </div>
        </nav>
      </div>
    </header>
  );
}
