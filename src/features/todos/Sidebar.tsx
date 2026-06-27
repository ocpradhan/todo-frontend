import { ChevronLeft, ChevronsRight } from "lucide-react";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import NavList from "./NavList";

type SidebarProps = {
  isCollapsed?: boolean;
  onToggle?: () => void;
};

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`border-border border border-t-0 row-span-2 md:row-span-2 flex flex-col`}
    >
      <Logo className="border-b border-border p-3" isCollapsed={isCollapsed} />
      <NavList
        className="border-b border-border flex-1"
        isCollapsed={isCollapsed}
      />
      <Button bgClasses="" className="p-5! group" onClick={onToggle}>
        {!isCollapsed ? (
          <>
            <ChevronLeft
              size={14}
              className="text-body group-hover:text-heading!"
            />
            <p className="text-body leading-0 group-hover:text-heading!">
              Collapse
            </p>
          </>
        ) : (
          <ChevronsRight
            size={14}
            className="text-body group-hover:text-heading!"
          />
        )}
      </Button>
    </aside>
  );
}
