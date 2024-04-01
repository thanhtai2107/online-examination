import AdminLayout from "../layout/AdminLayout";
import AnotherTable from "../pages/AnotherTable";
import Dashboard from "../pages/Dashboard";
import Exam from "../pages/Exam";
import Login from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";

export const route = [
  { path: "/", component: Login, layout: null, private: null },
  {
    path: "/exams",
    component: AnotherTable,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/exam",
    component: Exam,
    layout: null,
    private: PrivateRoute,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: AdminLayout,
    private: PrivateRoute,
  },
];
