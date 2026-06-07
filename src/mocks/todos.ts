import type { Task } from "../features/todos/types/todo.types";

export const tasks: Task[] = [
  {
    id: 1,
    taskName: "Review quarterly report",
    taskDesc: "Go through Q2 financial data",
    priority: "High",
    date: new Date(),
    completed: false,
  },
  {
    id: 2,
    taskName: "Update team documentation",
    taskDesc: "Add new onboarding guides",
    priority: "Medium",
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: true,
  },
  {
    id: 3,
    taskName: "Schedule design review meeting",
    taskDesc: "Add new onboarding guides",
    priority: "Low",
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    completed: true,
  },
  {
    id: 4,
    taskName: "Schedule design review meeting",
    taskDesc: "Add new onboarding guides",
    priority: "Low",
    date: new Date(new Date().setDate(new Date().getDate() + 3)),
    completed: true,
  },
];
