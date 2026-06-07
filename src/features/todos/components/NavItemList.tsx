import { NavLink } from "react-router";
import type { NavItemProps } from "../types/navItem.types";

type Props = {
  navItem: NavItemProps;
  isCollapsed?: boolean;
};

export default function NavItem({ navItem, isCollapsed }: Props) {
  const { icon, routeName, tasksCount, route } = navItem;

  return (
    <NavLink
      to={route}
      className={({ isActive }) => {
        const base =
          "flex items-center p-2 rounded-lg text-sm cursor-pointer transition duration-500 ease-in-out w-full";
        const alignment = isCollapsed ? "justify-center" : "justify-between";
        const colors = isActive
          ? "bg-primary-700 text-primary-50"
          : "bg-transparent hover:bg-primary-100 text-body";

        return `${base} ${alignment} ${colors}`;
      }}
    >
      {({ isActive }) => (
        <>
          <span className="inline-flex items-center gap-4 font-semibold">
            {icon} {!isCollapsed ? routeName : null}
          </span>
          {!isCollapsed ? (
            <span
              className={`${isActive ? "bg-primary-500 transition duration-500 ease-in-out" : "bg-surface-muted transition duration-500 ease-in-out"} rounded-full min-w-5 h-5 p-1  flex items-center justify-center leading-none text-xs `}
            >
              {tasksCount}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  );
}
