type FilterTabsProps = {
  items: string[];
  active: string | null;
  onChange: (value: string | null) => void;
  label?: string;
};

export function FilterTabs({ items, active, onChange, label = "All" }: FilterTabsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`bezel-sm border px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide transition-colors ${
          active === null
            ? "border-accent bg-accent/15 text-accent"
            : "border-neutral/30 text-base-content/60 hover:border-neutral/50 hover:text-base-content/80"
        }`}
      >
        {label}
      </button>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`bezel-sm border px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide transition-colors ${
            active === item
              ? "border-accent bg-accent/15 text-accent"
              : "border-neutral/30 text-base-content/60 hover:border-neutral/50 hover:text-base-content/80"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
