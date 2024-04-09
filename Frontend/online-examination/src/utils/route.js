import AdminLayout from "../layout/AdminLayout";
import AnotherTable from "../pages/AnotherTable";
import Dashboard from "../pages/Dashboard";
import Exam from "../pages/Exam";
import ListCourse from "../pages/ListCourse";
import ListStudent from "../pages/ListStudent";
import ListTeacher from "../pages/ListTeacher";
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
    path: "/courses",
    component: ListCourse,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/teachers",
    component: ListTeacher,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/students",
    component: ListStudent,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: AdminLayout,
    private: PrivateRoute,
  },
];
