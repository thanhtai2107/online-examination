import { useNavigate } from "react-router-dom";

function StudentSidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-bar-wrapper">
        <div className="item" onClick={() => navigate("/student/exams")}>
          <i className="fa-regular fa-file-lines"></i>
          <p>Bài thi</p>
        </div>
        <div className="item" onClick={() => navigate("/student/results")}>
          <i className="fa-regular fa-file-lines"></i>
          <p>Kết quả</p>
        </div>
      </div>
    </>
  );
}

export default StudentSidebar;
