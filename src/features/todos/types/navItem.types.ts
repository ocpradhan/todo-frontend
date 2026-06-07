import type { ReactNode } from "react";

export type NavItemProps = {
  icon: ReactNode;
  routeName: string;
  tasksCount: number;
  route: string;
};
