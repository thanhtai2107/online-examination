import AdminLayout from "../layout/AdminLayout";
import StudentLayout from "../layout/StudentLayout";
import Dashboard from "../pages/Dashboard";
import Exam from "../pages/Exam";
import ListCourse from "../pages/ListCourse";
import ListStudent from "../pages/ListStudent";
import ListTeacher from "../pages/ListTeacher";
import UpdateExam from "../pages/UpdateExam";
import Login from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import ListExam from "../pages/ListExam";
import StudentExams from "../pages/Student_Exams";

export const route = [
  { path: "/", component: Login, layout: null, private: null },
  {
    path: "/exams",
    component: ListExam,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/exam/:id",
    component: Exam,
    layout: null,
    private: PrivateRoute,
  },
  {
    path: "/exam/update/:id",
    component: UpdateExam,
    layout: AdminLayout,
    private: PrivateRoute,
  },
  {
    path: "/student/exams",
    component: StudentExams,
    layout: StudentLayout,
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
