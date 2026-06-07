import { Outlet } from "react-router";
import { tasks } from "../../../mocks/todos";

export default function TaskArea() {
  return (
    <main className="min-w-0 min-h-0 border-border border-collapse bg-page p-5 flex flex-col gap-5 overflow-y-auto">
      <Outlet context={tasks} />
    </main>
  );
}
