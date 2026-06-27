import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getTasks } from "../../services/apiTasks";
import type { Task } from "./types/todo.types";

export default function TaskArea() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(function () {
    async function getAllTasks() {
      const res = await getTasks();
      setTasks(res);
      console.log("res", res);
    }

    getAllTasks();
  }, []);

  return (
    <main className="min-w-0 min-h-0 border-border border-collapse bg-page p-5 flex flex-col gap-5 overflow-y-auto">
      <Outlet context={tasks} />
    </main>
  );
}
