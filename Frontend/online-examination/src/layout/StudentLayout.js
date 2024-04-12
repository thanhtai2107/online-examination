import Navbar from "../components/navbar/Navbar";
import StudentSidebar from "../components/sidebar/StudentSidebar";
function StudentLayout({ children }) {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content-wrapper">
            <div className="side-bar">
              <StudentSidebar />
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLayout;
