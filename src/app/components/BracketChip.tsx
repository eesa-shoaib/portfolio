import Link from "next/link";

type BracketChipProps = {
  children: string;
  href?: string;
  className?: string;
};

export function BracketChip({ children, href, className = "" }: BracketChipProps) {
  const content = `[ ${children} ]`;
  const classes = `bracket-chip ${className}`;

  if (href) {
    const external = href.startsWith("http");

    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return <span className={classes}>{content}</span>;
}
