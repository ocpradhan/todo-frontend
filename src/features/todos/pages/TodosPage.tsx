import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskArea from "../components/TaskArea";

export default function TodosPage() {
  return (
    <div className="grid min-h-dvh grid-cols-1 md:grid-cols-[240px_1fr] grid-rows-[8rem_1fr]">
      <Sidebar />
      <Header />
      <TaskArea />
    </div>
  );
}
