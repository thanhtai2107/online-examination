import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
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
