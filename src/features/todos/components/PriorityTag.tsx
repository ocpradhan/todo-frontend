import type { ReactNode } from "react";

type PriorityTagProps = {
  children: ReactNode;
  priority: string;
};

export default function PriorityTag({ children, priority }: PriorityTagProps) {
  if (priority === "High")
    return (
      <span
        className={
          "border border-danger bg-danger-light text-danger px-3 rounded-xl text-xs inline-flex items-center"
        }
      >
        {children}
      </span>
    );

  if (priority === "Medium")
    return (
      <span
        className={
          "border border-warning bg-warning-light text-warning px-3 rounded-xl text-xs inline-flex items-center"
        }
      >
        {children}
      </span>
    );

  if (priority === "Low")
    return (
      <span
        className={
          "border border-success bg-success-light text-success px-3 rounded-xl text-xs inline-flex items-center"
        }
      >
        {children}
      </span>
    );
}
