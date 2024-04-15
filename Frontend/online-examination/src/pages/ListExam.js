import { Pagination, Table, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeCourses } from "../redux/course/Action";
import validation from "../service/validation";
import { addExam, getExams } from "../redux/exam/Action";
import { useNavigate } from "react-router-dom";

function ListExam() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector((store) => store.course);
  const exam = useSelector((store) => store.exam);
  const [addExamErrors, setAddExamErrors] = useState({});
  const [inputData, setInputData] = useState({
    title: "",
    totalTime: "",
    courseId: "",
  });
  const { Column } = Table;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleCourseChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute("id");
    setInputData({ ...inputData, courseId: id });
  };

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
  useEffect(() => {
    const data = {
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getExams(data));
  }, [dispatch, exam.addExam]);
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
          style={{ margin: "15px 0px" }}
          dataSource={exam.exams?.content}
          tableLayout={"fixed"}
          size="small"
          pagination={false}
        >
          <Column title="Tên bài thi" dataIndex="title" key="fullname" />
          <Column
            title="Tổng thời gian(phút)"
            dataIndex="totalTime"
            key="totalTime"
          />
          <Column
            title="Trạng thái"
            key="status"
            render={(_, record) => (
              <>{record.status === 1 ? "Hoạt động" : "Ngưng hoạt động"}</>
            )}
          />
          <Column
            title="Ngày tạo"
            dataIndex="dateCreated"
            key="dateCreated"
            ellipsis
          />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <p
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => navigate(`/exam/update/${record.id}`)}
                >
                  Cập nhật
                </p>
                <p
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => navigate(`/exam/results/${record.id}`)}
                >
                  Xem kết quả
                </p>
              </Space>
            )}
          />
        </Table>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={exam?.exams.totalElements}
            size="small"
            current={currentPage}
            onChange={(current) => handlePageChange(current)}
          />
        </div>
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
