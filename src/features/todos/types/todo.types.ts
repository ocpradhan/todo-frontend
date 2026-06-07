export type Task = {
  id: number;
  taskName: string;
  taskDesc?: string;
  priority: "Low" | "Medium" | "High";
  date: Date;
  completed: boolean;
};
