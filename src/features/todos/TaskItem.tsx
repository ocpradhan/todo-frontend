import PriorityTag from "./PriorityTag";
import { Trash2Icon } from "lucide-react";

import type { Task } from "./types/todo.types";
import DateShower from "./DateShower";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { useState } from "react";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  const { id, taskName, taskDesc, priority, date, completed } = task;

  const [isCompleted, setIsCompleted] = useState(completed);

  function handleIsCompleted() {
    setIsCompleted((cur) => !cur);
  }

  return (
    <div
      className={`border-border border p-5 rounded-lg flex gap-2 hover:shadow-lg group bg-surface transition duration-500 ease-in-out ${isCompleted ? "opacity-65" : ""}`}
    >
      <div>
        <Checkbox
          id={`checkbox-${id}`}
          checked={isCompleted}
          onChange={handleIsCompleted}
        />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <h2
            className={`font-semibold text-lg text-heading ${isCompleted ? "line-through" : ""}`}
          >
            {taskName}
          </h2>

          <p
            className={`text-sm text-body ${isCompleted ? "line-through" : ""}`}
          >
            {taskDesc}
          </p>

          <div className="flex gap-5 mt-2">
            <PriorityTag priority={priority}>{priority}</PriorityTag>
            <DateShower>{date}</DateShower>
          </div>
        </div>

        <Button
          bgClasses=""
          className="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
        >
          <Trash2Icon
            size={15}
            className="text-body hover:text-danger transition duration-500 ease-in-out"
          />
        </Button>
      </div>
    </div>
  );
}
