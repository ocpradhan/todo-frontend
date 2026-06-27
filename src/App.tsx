import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import TodosPage from "./pages/TodosPage";
import TodaysTasks from "./features/todos/TodaysTasks";
import UpcomingTasks from "./features/todos/UpcomingTasks";
import CompletedTasks from "./features/todos/CompletedTasks";
import AllTasks from "./features/todos/AllTasks";
import NotFoundPage from "./ui/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosPage />}>
          <Route index element={<Navigate replace to="todaysTasks" />} />

          <Route path="todaysTasks" element={<TodaysTasks />} />
          <Route path="upcomingTasks" element={<UpcomingTasks />} />
          <Route path="completedTasks" element={<CompletedTasks />} />
          <Route path="allTasks" element={<AllTasks />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
