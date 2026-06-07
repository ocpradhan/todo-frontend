import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import TodosPage from "../../features/todos/pages/TodosPage";
import NotFoundPage from "../../components/feedback/NotFoundPage";
import UpcomingTasks from "../../features/todos/components/UpcomingTasks";
import CompletedTasks from "../../features/todos/components/CompletedTasks";
import AllTasks from "../../features/todos/components/AllTasks";
import TodaysTasks from "../../features/todos/components/TodaysTasks";

export default function AppRouter() {
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
