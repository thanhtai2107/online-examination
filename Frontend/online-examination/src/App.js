import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import Exam from "./pages/Exam";
import AnotherTable from "./pages/AnotherTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Exam />} path="/exam" />
        <Route
          element={
            <AdminLayout>
              <AnotherTable />
            </AdminLayout>
          }
          path="/table"
        />
        <Route
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
          path="/dashboard"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
