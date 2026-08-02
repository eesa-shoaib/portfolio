Build a personal portfolio web app using Next.js (App Router, TypeScript) and daisyUI, following the exact theme and design system below. Do not deviate from the visual language described — it's a "retro tech" aesthetic built on a custom daisyUI theme called "pokota."

## Theme (add to globals.css exactly as-is)

@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "pokota";
  default: true;
  color-scheme: light;
  --color-base-100: #A9BFD6;
  --color-base-200: #93AEC9;
  --color-base-300: #7C9BBD;
  --color-base-content: #12192A;
  --color-primary: #D9401A;
  --color-primary-content: #FFF3EE;
  --color-secondary: #C98A00;
  --color-secondary-content: #FFF6E0;
  --color-accent: #8FB300;
  --color-accent-content: #F5FFDA;
  --color-neutral: #1E2A3D;
  --color-neutral-content: #E7ECF4;
  --color-info: #1B6FC7;
  --color-info-content: #FFFFFF;
  --color-success: #1F8C45;
  --color-success-content: #FFFFFF;
  --color-warning: #C46A00;
  --color-warning-content: #FFFFFF;
  --color-error: #C22B2B;
  --color-error-content: #FFFFFF;
}

Set data-theme="pokota" on the <html> tag in the root layout.

## Design principles — "retro tech / terminal"

- Monospace type (font-mono) for headings, labels, nav links, and anything meant to feel like system UI. Body/paragraph text can stay in a clean sans-serif for readability.
- Hard-edged, cut-corner "bezel" panels instead of soft rounded cards — use clip-path polygons with small diagonal notches on corners (like a CRT monitor bezel), not border-radius.
- No blur/glassmorphism except the sticky navbar, which uses a scanline texture (repeating-linear-gradient overlay at ~0.15 opacity) and a blinking accent-colored status dot instead of soft glow.
- Bracket-wrapped labels for nav and section tags, e.g. [ PROJECTS ], [ SYS.STATUS: ONLINE ] — evokes terminal menus.
- Flat colors, no gradients except subtle scanline textures. High contrast: base-content on base-100/200/300, no low-opacity text below ~70%.
- primary (#D9401A) = active/highlighted state and key CTAs. accent (#8FB300) = hover state and secondary emphasis, echoing a terminal's blinking cursor/LED color. neutral (#1E2A3D) = dark panel backgrounds for high-contrast sections (footer, code blocks, stat panels).
- Reuse the pointed-banner clip-path navbar and cut-corner bezel clip-path from earlier work: 
  bezel: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)
- Every card/panel gets a 2-3px solid border in primary or neutral/30, never a soft box-shadow alone.
- Skill tags, tech stack chips, and status badges render as small bracket-style pills: [ Go ] [ PostgreSQL ] [ Docker ] — monospace, uppercase, bordered.

## Site structure & content

### Navbar (global, sticky)
Links: Home, Projects, Experience, About, Contact
Use the pointed-banner / bezel nav shape with scanline texture and blinking accent status dot, "sys" label, bracket-wrapped active/hover link states, primary underline on active route.

### Home (/)
- Hero section: name "Eesa Shoaib" in large monospace type, a terminal-style typing/blink cursor effect optional, and the professional summary as body text:
  "Computer Science student at FAST NUCES with practical experience in Go, Flutter, React, Node.js, and PostgreSQL. Built backend APIs, mobile apps, dashboards, and database-driven systems using Docker, Supabase, SQL Server, and C++."
- Contact strip (bracket-style chips, each linking out): 
  [ +92 306 4000504 ] [ Lahore, Pakistan ] [ eesa.shoaib@gmail.com ] [ github.com/eesa-shoaib ] [ linkedin.com/in/eesa-shoaib-6705582a0 ]
- CTA buttons: "View projects" (btn-primary) and "Get in touch" (btn-outline accent)
- A "Technical Skills" panel styled like a terminal readout with categorized bracket-chip groups:
  Languages: Go, C++, C#, Dart, Python, JS, TS, SQL
  Frameworks: Flutter, Riverpod, React, Next.js, Node.js, Express, .NET WinForms, Raylib, ADO.NET
  Databases: PostgreSQL, SQL Server (T-SQL), Supabase, ChromaDB
  Tools: Docker, Git, REST APIs, JWT, WebSockets, CMake

### Experience (/experience)
Two entries as bezel-clipped panels in a vertical timeline layout (left border accent line in primary):

1. Bookme, Lahore — Backend Intern — July 2026 – Aug 2026
   - Built and optimized scalable backend REST APIs using NestJS, TypeORM, and MySQL for structured data modeling and efficient database queries.
   - Implemented secure authentication and fine-grained authorization using JWT, role-based access control (RBAC), custom NestJS Guards, and Middleware.
   - Integrated Redis caching to reduce database load, speed up session management, and significantly improve endpoint response times.

2. Highnoon Laboratories, Lahore — Software Engineering Intern — July 2025 – Aug 2025
   - Built and deployed Quirk in Go with Cloudflare Workers AI, ChromaDB, JWT authentication, and PostgreSQL token storage.
   - Dockerized the Go service and added PDF, CSV, JSON, and Markdown export features during the internship.

Also include an Education entry in the same timeline style:
FAST NUCES, Lahore — BS Computer Science — Aug 2023 – Present

### Projects (/projects)
Grid of bezel-clipped project cards (2-3 columns responsive), each with: project name, tech stack as bracket chips, bullet points, and a subtle primary top border accent on hover.

1. Quirk — Go, PostgreSQL, Docker, Next.js
   - Built an AI-powered knowledge search system for querying uploaded PDF, CSV, JSON, and Markdown files.
   - Implemented a Go RAG pipeline with chunking, Cloudflare Workers AI embeddings, and ChromaDB semantic search.
   - Developed a Go REST API with JWT auth, PostgreSQL migrations, Docker deployment, and a Next.js frontend.

2. Khelgaah — Flutter, Go, PostgreSQL
   - Built a sports venue booking platform for players, venue owners, and tournament organizers.
   - Developed the Flutter and Go booking workflow with real-time timeslot management and confirmation flows using REST APIs.
   - Implemented transactional PostgreSQL operations and booking checks to prevent double-bookings.

3. Nudge — Flutter, Supabase, PostgreSQL
   - Built a personal finance app for tracking recurring bills and missed payments.
   - Developed a Flutter dashboard with Riverpod, Supabase PostgreSQL, and WebSockets for live bill and payment updates.
   - Added automated missed-payment email alerts using Supabase Edge Functions and database webhooks.

4. Penance (Platformer Game) — C++17, CMake, Raylib
   - Built a 2D action platformer with enemy AI and story-driven gameplay.
   - Implemented modular game logic in C++ and Raylib with a finite state machine for enemy behavior.
   - Created a dialogue system from external text files and set up CMake for easier multi-platform builds.

5. Football Management System — Next.js 15, Node.js, Express, SQL Server
   - Built a league management platform for organizing teams, players, matches, and admin tasks.
   - Developed the Next.js frontend and Node.js/Express APIs for team, player, and match management workflows.
   - Designed a SQL Server database with JWT authentication and role-based access control.

6. ChippaMotors — C#, .NET WinForms, ADO.NET, SQL Server
   - Built a desktop dealership system for managing vehicle inventory, sales activity, and customer records.
   - Developed the C# .NET WinForms application using ADO.NET and SQL Server.

### About (/about)
Reuse the professional summary in a longer/expanded form, plus the Education entry, plus a repeat of the Technical Skills panel (can be a shared component used on both Home and About).

### Contact (/contact)
A bezel-panel "terminal" style contact block listing:
- Phone: +92 306 4000504
- Location: Lahore, Pakistan
- Email: eesa.shoaib@gmail.com (mailto: link)
- GitHub: github.com/eesa-shoaib (external link)
- LinkedIn: linkedin.com/in/eesa-shoaib-6705582a0 (external link)
Each as a bracket-style row with an icon, styled like a system diagnostics readout, plus a simple contact form (name, email, message) using daisyUI form components with bezel-clipped inputs and a primary submit button.

## Technical requirements
- Next.js App Router, TypeScript, one page/route per section above under src/app/
- Shared Navbar and Footer components used across all pages via the root layout
- Extract reusable components: BezelCard/BezelPanel (the clip-path panel), BracketChip (tech tag), TimelineEntry (experience/education), ProjectCard
- Fully responsive (mobile: stack nav into dropdown, single-column grids)
- Use Tabler icons (or lucide-react) for contact icons, not emoji
- Keep all copy exactly as provided above — do not paraphrase or invent additional content
