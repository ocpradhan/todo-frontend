import type { Task } from "../types/todo.types";
import TaskItem from "./TaskItem";
import { useOutletContext } from "react-router";

export default function CompletedTasks() {
  const tasks: Task[] = useOutletContext();
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskItem task={task} />
      ))}
    </>
  );
}
