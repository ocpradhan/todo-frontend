import { useState } from "react";
import Header from "../features/todos/Header";
import Sidebar from "../features/todos/Sidebar";
import TaskArea from "../features/todos/TaskArea";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function TodosPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const isDesktop = !isMobile ? isCollapsed : true;

  const handleIsCollapsed = () => setIsCollapsed((cur) => !cur);

  return (
    <div
      className={`grid h-dvh transition-[grid-template-columns] duration-300 ease-in-out grid-rows-[auto_1fr] ${
        isDesktop ? "grid-cols-[64px_1fr]" : "grid-cols-[240px_1fr]"
      }`}
    >
      <Sidebar isCollapsed={isDesktop} onToggle={handleIsCollapsed} />
      <Header />
      <TaskArea />
    </div>
  );
}
