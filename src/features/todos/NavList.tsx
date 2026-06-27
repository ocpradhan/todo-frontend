import {
  CalendarDays,
  CalendarClock,
  CircleCheck,
  ListTodo,
} from "lucide-react";
import type { NavItemProps } from "./types/navItem.types";
import NavItem from "./NavItemList";

type NavListProps = { className?: string; isCollapsed?: boolean };

const navItems: NavItemProps[] = [
  {
    icon: <CalendarDays size={20} />,
    routeName: "Today",
    tasksCount: 2,
    route: "todaysTasks",
  },
  {
    icon: <CalendarClock size={20} />,
    routeName: "Upcoming",
    tasksCount: 2,
    route: "upcomingTasks",
  },
  {
    icon: <CircleCheck size={20} />,
    routeName: "Completed",
    tasksCount: 2,
    route: "completedTasks",
  },
  {
    icon: <ListTodo size={20} />,
    routeName: "All Tasks",
    tasksCount: 6,
    route: "allTasks",
  },
];

export default function NavList({ className, isCollapsed }: NavListProps) {
  return (
    <nav className={`p-3 ${className}`}>
      <ol className="flex flex-col gap-5">
        {navItems.map((item, i) => (
          <NavItem navItem={item} key={i} isCollapsed={isCollapsed} />
        ))}
      </ol>
    </nav>
  );
}
