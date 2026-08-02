import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type BezelPanelProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function BezelPanel<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: BezelPanelProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={`bezel border-2 ${className}`} {...props}>
      {children}
    </Component>
  );
}
