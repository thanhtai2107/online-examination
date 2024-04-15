import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-bar-wrapper">
        <div className="item" onClick={() => navigate("/dashboard")}>
          <i className="fa-solid fa-qrcode"></i>
          <p>Dashboard</p>
        </div>
        <div className="item" onClick={() => navigate("/teachers")}>
          <i className="fa-regular fa-user"></i>
          <p>Quản lý giáo viên</p>
        </div>
        <div className="item" onClick={() => navigate("/students")}>
          <i className="fa-regular fa-user"></i>
          <p>Quản lý học sinh</p>
        </div>
        <div className="item" onClick={() => navigate("/exams")}>
          <i className="fa-regular fa-file-lines"></i>
          <p>Quản lý bài thi</p>
        </div>
        <div className="item" onClick={() => navigate("/courses")}>
          <i className="fa-regular fa-file-lines"></i>
          <p>Quản lý khóa học</p>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
