import type { Task } from "../types/todo.types";
import TaskItem from "./TaskItem";
import { useOutletContext } from "react-router";

export default function UpcomingTasks() {
  const tasks: Task[] = useOutletContext();
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
}
