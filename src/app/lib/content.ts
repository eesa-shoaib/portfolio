export const summary =
  "Computer Science student at FAST NUCES with experience building mobile apps, web applications, backend APIs, and database-driven systems. Skilled in Go, Flutter, NestJS, C++, PostgreSQL, and Supabase.";

export const contactLinks = [
  { label: "Lahore, Pakistan", href: "/contact" },
  { label: "eesa.shoaib@gmail.com", href: "mailto:eesa.shoaib@gmail.com" },
  { label: "github.com/eesa-shoaib", href: "https://github.com/eesa-shoaib" },
  {
    label: "linkedin.com/in/eesa-shoaib",
    href: "https://linkedin.com/in/eesa-shoaib",
  },
];

export const skills = [
  {
    category: "Languages",
    primary: ["Go", "Dart", "TS", "C++"],
    secondary: ["C#", "Python", "JS"],
  },
  {
    category: "Frameworks",
    primary: ["Flutter", "Next.js", "Node.js", "NestJS"],
    secondary: ["Riverpod", "React", "Express", ".NET WinForms", "Raylib", "ADO.NET"],
  },
  {
    category: "Databases",
    primary: ["PostgreSQL", "Supabase", "MySQL"],
    secondary: ["SQL Server (T-SQL)", "ChromaDB"],
  },
  {
    category: "Tools",
    primary: ["Docker", "Git", "REST APIs", "R2"],
    secondary: ["JWT", "WebSockets", "CMake"],
  },
];

export const workExperience = [
  {
    eyebrow: "Bookme, Lahore",
    title: "Backend Intern",
    date: "July 2026 – Aug 2026",
    bullets: [
      "Built and optimized scalable backend REST APIs using NestJS, TypeORM, and MySQL for structured data modeling and efficient database queries.",
      "Implemented secure authentication and fine-grained authorization using JWT, role-based access control (RBAC), custom NestJS Guards, and Middleware.",
      "Integrated Redis caching to reduce database load, speed up session management, and significantly improve endpoint response times.",
      "Configured R2 Cloudflare for object storage."
    ],
  },
  {
    eyebrow: "Highnoon Laboratories, Lahore",
    title: "Software Engineering Intern",
    date: "July 2025 – Aug 2025",
    bullets: [
      "Built and deployed Quirk in Go with Cloudflare Workers AI, ChromaDB, JWT authentication, and PostgreSQL token storage.",
      "Dockerized the Go service and added PDF, CSV, JSON, and Markdown export features during the internship.",
    ],
  },
];

export const education = [
  {
    eyebrow: "FAST NUCES, Lahore",
    title: "BS Computer Science",
    date: "Aug 2023 – Present",
    bullets: [],
  },
];

export const projects = [
  {
    name: "Quirk",
    tech: ["Go", "PostgreSQL", "Docker", "Next.js"],
    github: "https://github.com/eesa-shoaib/quirk",
    bullets: [
      "Built an AI-powered knowledge search system for querying uploaded PDF, CSV, JSON, and Markdown files.",
      "Implemented a Go RAG pipeline with chunking, Cloudflare Workers AI embeddings, and ChromaDB semantic search.",
      "Developed a Go REST API with JWT auth, PostgreSQL migrations, Docker deployment, and a Next.js frontend.",
    ],
  },
  {
    name: "Khelgaah",
    tech: ["Flutter", "Go", "PostgreSQL"],
    github: "https://github.com/eesa-shoaib/khelgaah",
    bullets: [
      "Built a sports venue booking platform for players, venue owners, and tournament organizers.",
      "Developed the Flutter and Go booking workflow with real-time timeslot management and confirmation flows using REST APIs.",
      "Implemented transactional PostgreSQL operations and booking checks to prevent double-bookings.",
    ],
  },
  {
    name: "Nudge",
    tech: ["Flutter", "Supabase", "PostgreSQL"],
    github: "https://github.com/eesa-shoaib/nudge",
    bullets: [
      "Built a personal finance app for tracking recurring bills and missed payments.",
      "Developed a Flutter dashboard with Riverpod, Supabase PostgreSQL, and WebSockets for live bill and payment updates.",
      "Added automated missed-payment email alerts using Supabase Edge Functions and database webhooks.",
    ],
  },
  {
    name: "Penance (Platformer Game)",
    tech: ["C++17", "CMake", "Raylib"],
    github: "https://github.com/eesa-shoaib/penance",
    bullets: [
      "Built a 2D action platformer with enemy AI and story-driven gameplay.",
      "Implemented modular game logic in C++ and Raylib with a finite state machine for enemy behavior.",
      "Created a dialogue system from external text files and set up CMake for easier multi-platform builds.",
    ],
  },
  {
    name: "Football Management System",
    tech: ["Next.js 15", "Node.js", "Express", "SQL Server"],
    github: "https://github.com/eesa-shoaib/football-management-system",
    bullets: [
      "Built a league management platform for organizing teams, players, matches, and admin tasks.",
      "Developed the Next.js frontend and Node.js/Express APIs for team, player, and match management workflows.",
      "Designed a SQL Server database with JWT authentication and role-based access control.",
    ],
  },
  {
    name: "ChippaMotors",
    tech: ["C#", ".NET WinForms", "ADO.NET", "SQL Server"],
    github: "https://github.com/eesa-shoaib/ChhipaMerged",
    bullets: [
      "Built a desktop dealership system for managing vehicle inventory, sales activity, and customer records.",
      "Developed the C# .NET WinForms application using ADO.NET and SQL Server.",
    ],
  },
];
