export function Footer() {
  return (
    <footer className="bg-neutral px-5 py-6 text-neutral-content">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm font-semibold uppercase tracking-wide">
          Eesa Shoaib
        </p>
        <p className="flex items-center gap-2 font-mono text-xs text-neutral-content/50">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Lahore, Pakistan
        </p>
      </div>
    </footer>
  );
}
