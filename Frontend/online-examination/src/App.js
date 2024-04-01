import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { route } from "./utils/route";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {route.map((route, index) => {
          let Layout = Fragment;
          if (route.layout != null) {
            Layout = route.layout;
          }
          let PrivateRoute = Fragment;
          if (route.private != null) {
            PrivateRoute = route.private;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
