type TagProps = {
  children: string;
  className?: string;
};

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`bezel-sm border border-neutral/30 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-base-content/80 ${className}`}
    >
      {children}
    </span>
  );
}
