import tableData1 from "../data/tableData1.json";
import Table from "../components/table/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeCourses } from "../redux/course/Action";
import validation from "../service/validation";
import { addExam } from "../redux/exam/Action";

function ListExam() {
  const dispatch = useDispatch();
  const course = useSelector((store) => store.course);
  const [addExamErrors, setAddExamErrors] = useState({});
  const [inputData, setInputData] = useState({
    title: "",
    totalTime: "",
    courseId: "",
  });
  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleCourseChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute("id");
    setInputData({ ...inputData, courseId: id });
  };
  const columns = [
    { label: "Tên bài thi", accessor: "exam_name" },
    { label: "Thuộc khóa", accessor: "of_course" },
    { label: "Giáo viên", accessor: "teacher" },
    { label: "Ngày thi", accessor: "exam_date" },
    { label: "Thời gian", accessor: "time" },
  ];

  const handleSubmitAddExam = (e) => {
    e.preventDefault();
    const error = validation(inputData);
    setAddExamErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addExam(inputData));
      console.log(inputData);
      handleCloseForm();
    }
  };
  const handlePopupForm = () => {
    document.getElementById("add-exam").style.display = "flex";
  };
  const handleCloseForm = () => {
    document.getElementById("add-exam").style.display = "none";
  };
  useEffect(() => {
    dispatch(activeCourses());
  }, [dispatch]);
  return (
    <>
      <div className="list-exam-wrapper">
        <div className="top">
          <h3>Danh sách bài thi</h3>
          <button onClick={handlePopupForm}>
            <i className="fa-solid fa-plus"></i>Thêm bài thi
          </button>
        </div>
        <Table
          columns={columns}
          // caption={"Danh sách bài thi"}
          data={tableData1}
        />
        <div className="add-exam" id="add-exam">
          <form action="" className="form-add" onSubmit={handleSubmitAddExam}>
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseForm}
            ></i>
            <h3>Thêm bài thi</h3>
            <div className="input-field">
              <label htmlFor="">Tên bài thi:</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={(e) => handleInputChange(e)}
              />
              {addExamErrors.title && (
                <span className="error">{addExamErrors.title}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Thời gian:</label>
              <br />
              <input
                type="number"
                name="totalTime"
                placeholder="Số phút"
                onChange={(e) => handleInputChange(e)}
              />
              {addExamErrors.totalTime && (
                <span className="error">{addExamErrors.totalTime}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Khóa học:</label>
              <br />
              <select
                defaultValue="--Khóa học--"
                onChange={(e) => handleCourseChange(e)}
              >
                <option selected disabled>
                  --Khóa học--
                </option>
                {course.activeCourses &&
                  course.activeCourses.map((item) => {
                    return (
                      <option key={item.id} id={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
              </select>
              {addExamErrors.courseId && (
                <span className="error">{addExamErrors.courseId}</span>
              )}
            </div>

            <button type="submit">Thêm</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ListExam;
