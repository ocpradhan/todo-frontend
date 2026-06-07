import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskArea from "../components/TaskArea";

export default function TodosPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleIsCollapsed = () => setIsCollapsed((cur) => !cur);

  return (
    <div
      className={`grid h-dvh transition-[grid-template-columns] duration-300 ease-in-out grid-cols-1 ${
        isCollapsed ? "md:grid-cols-[64px_1fr]" : "md:grid-cols-[240px_1fr]"
      }`}
    >
      <Sidebar isCollapsed={isCollapsed} onToggle={handleIsCollapsed} />
      <Header />
      <TaskArea />
    </div>
  );
}
