# Eesa Shoaib — Portfolio

A personal portfolio site built with **Next.js** and **daisyUI**, presenting my background, experience, and projects as Computer Science student and software engineer.

Live sections: **Home**, **Experience**, **Projects**, **About**, **Contact**.

---

## Design Vision

The site is built around a single idea: **what if a portfolio looked like a piece of vintage hardware, not a modern web app?**

Instead of the usual soft shadows, rounded cards, and gradient hero sections, this portfolio borrows its visual language from **old computer systems** — the beige plastic casings of machines like the IBM PC and Apple II, terminal readouts, boot screens, and system diagnostics panels. The goal was a site that feels *inhabited*, like it's running on something physical, rather than another templated dark-mode landing page.

### Why this direction

A portfolio for a CS student working across backend systems, mobile apps, and low-level projects (a C++ platformer, a custom RAG pipeline, a WinForms desktop app) called for something that reflected that range — technical, a little nostalgic, unafraid of looking like *software* rather than a marketing site.

## Theme: "Pokota"

The custom daisyUI theme sits deliberately **between light and dark mode** — warm, mid-toned beige and tan surfaces (`base-100` → `base-300`) instead of stark white or black. This mirrors the aged, warm-toned plastic of retro computer hardware, and keeps the site comfortable to read for long stretches without the harshness of a pure dark "hacker" theme.

- **Primary** (burnt orange-red) — reads like a power/status LED; used for CTAs and active states.
- **Secondary** (warm brown-gold) — supporting accent, echoes aged hardware trim.
- **Accent** (muted forest green) — a nod to CRT phosphor glow, used sparingly for hover states and "active/online" indicators.
- **Neutral** (dark brown) — grounds high-contrast panels like the skills readout and contact card.

Every color was chosen to hold strong, accessible contrast against the mid-toned base — nothing relies on low-opacity text to "feel" retro.

## Design Language

- **Monospace type** throughout headings, labels, and system-style text — the single biggest signal of "terminal," used deliberately rather than everywhere, to keep hierarchy intact.
- **Bezel panels** — custom `clip-path` shapes with cut corners, replacing rounded cards, mimicking an old CRT or device panel edge.
- **Bracket labels**, used sparingly — reserved for page eyebrows and key system labels only, not every piece of text, so they stay meaningful.
- **Scanline textures** on key surfaces (navbar, panels) for subtle CRT-adjacent texture without overwhelming legibility.
- **Terminal-style components** — a numbered experience timeline with "active" status indicators, a "compose.msg" styled contact form with window chrome, and a boot-profile style hero panel.

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **daisyUI** + Tailwind CSS, custom `pokota` theme
- **Lucide** icons

---

Built and designed by Eesa Shoaib.
