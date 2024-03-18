import Navbar from "../components/navbar/Navbar";
import AdminSidebar from "../components/sidebar/AdminSidebar";

function AdminLayout({ children }) {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content-wrapper">
            <div className="side-bar">
              <AdminSidebar />
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
