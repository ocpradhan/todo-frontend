import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import TodosPage from "./features/todos/pages/TodosPage";
import TodaysTasks from "./features/todos/components/TodaysTasks";
import UpcomingTasks from "./features/todos/components/UpcomingTasks";
import CompletedTasks from "./features/todos/components/CompletedTasks";
import AllTasks from "./features/todos/components/AllTasks";
import NotFoundPage from "./components/feedback/NotFoundPage";

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
