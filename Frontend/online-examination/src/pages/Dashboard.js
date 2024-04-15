import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../redux/teacher/Action";
import { getStudents } from "../redux/student/Action";
import { getExams } from "../redux/exam/Action";
import { getCourses } from "../redux/course/Action";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exam = useSelector((store) => store.exam);
  const student = useSelector((store) => store.student);
  const teacher = useSelector((store) => store.teacher);
  const course = useSelector((store) => store.course);
  useEffect(() => {
    const data = {
      page: 0,
      size: 5,
    };
    dispatch(getTeachers(data));
    dispatch(getStudents(data));
    dispatch(getExams(data));
    dispatch(getCourses(data));
  }, [dispatch]);
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Giảng Viên</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> {teacher.teachers?.totalElements}</span>
            </p>
          </div>
          <button onClick={() => navigate("/teachers")}>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-graduation-cap"></i> <p>Học Sinh</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span>{student.students?.totalElements}</span>
            </p>
          </div>
          <button onClick={() => navigate("/students")}>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-newspaper"></i> <p>Bài Thi</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> {exam.exams?.totalElements}</span>
            </p>
          </div>
          <button onClick={() => navigate("/exams")}>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-layer-group"></i>
            <p>Khóa học</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span>{course.courses?.totalElements}</span>
            </p>
          </div>
          <button onClick={() => navigate("/courses")}>Xem</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
