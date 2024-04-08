import { useEffect, useState } from "react";
import { Pagination, Table, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacher } from "../redux/teacher/Action";
import validation from "../service/validation";
import { addCourse, getCourses } from "../redux/course/Action";

function ListCourse() {
  const dispatch = useDispatch();
  const teacher = useSelector((store) => store.teacher);
  const [teacherId, setTeacherId] = useState("");
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [addCourseErrors, setAddCourseErrors] = useState({});
  const course = useSelector((store) => store.course);
  const { Column } = Table;
  const handleSubmitAddCourse = (e) => {
    e.preventDefault();
    const addData = {
      title: title,
      teacherId: teacherId,
    };
    const error = validation(addData);
    setAddCourseErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addCourse(addData));
      handleCloseForm();
    }
  };
  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setTeacherId(option);
  };
  const handleDeleteCourse = (id) => {};
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  const handlePopupForm = () => {
    document.getElementById("add-course").style.display = "flex";
  };
  const handleCloseForm = () => {
    document.getElementById("add-course").style.display = "none";
  };
  const handlePopupUpdateCourseForm = () => {
    document.getElementById("update-course").style.display = "flex";
  };
  const handleCloseUpdateCourseForm = () => {
    document.getElementById("update-course").style.display = "none";
  };

  useEffect(() => {
    dispatch(getAllTeacher());
  }, [teacher.addTeacher, dispatch]);
  useEffect(() => {
    const data = {
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getCourses(data));
  }, []);
  return (
    <>
      <div className="list-courses-wrapper">
        <div className="top">
          <h3>Danh sách khóa học</h3>
          <button onClick={handlePopupForm}>
            <i className="fa-solid fa-plus"></i>Thêm khóa học
          </button>
        </div>
        <Table
          style={{ margin: "15px 0px" }}
          dataSource={course.courses?.content}
          tableLayout={"fixed"}
          size="small"
          pagination={false}
        >
          <Column title="Tên khóa học" dataIndex="title" key="fullname" />
          <Column
            title="Tên giáo viên"
            // dataIndex="teacherDTO"
            key="teacherDTO"
            render={(_, record) => <>{record.teacherDTO.fullname}</>}
          />
          <Column title="Trạng thái" dataIndex="status" key="status" />
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
                <a onClick={() => handlePopupUpdateCourseForm(record.id)}>
                  Cập nhật
                </a>
                <a onClick={() => handleDeleteCourse(record.id)}>Xóa</a>
              </Space>
            )}
          />
        </Table>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={teacher?.teachers.totalElements}
            size="small"
            current={currentPage}
            onChange={(current) => handlePageChange(current)}
          />
        </div>
        <div className="add-course" id="add-course">
          <form action="" className="form-add" onSubmit={handleSubmitAddCourse}>
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseForm}
            ></i>
            <h3>Thêm khóa học</h3>
            <div className="input-field">
              <label htmlFor="">Tên khóa học:</label>
              <br />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              {addCourseErrors.title && (
                <span className="error">{addCourseErrors.title}</span>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="">Giáo viên:</label>
              <br />
              <select
                onChange={(e) => handleSelectChange(e)}
                defaultValue="--Giáo viên--"
              >
                <option disabled>--Giáo viên--</option>
                {teacher?.allTeachers &&
                  teacher.allTeachers.map((item) => {
                    return (
                      <option key={item.id} id={item.id}>
                        {item.fullname}
                      </option>
                    );
                  })}
              </select>
              {addCourseErrors.teacherId && (
                <span className="error">{addCourseErrors.teacherId}</span>
              )}
            </div>

            <button type="submit">Thêm</button>
          </form>
        </div>
        <div className="update-course" id="update-course">
          <form action="" className="form-add">
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseUpdateCourseForm}
            ></i>
            <h3>Cập nhật khóa học</h3>
            <div className="input-field">
              <label htmlFor="">Tên khóa học:</label>
              <br />
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Giáo viên:</label>
              <br />
              <select>
                <option selected disabled>
                  --Giáo viên--
                </option>
                <option>Nguyễn Văn A</option>
                <option>Nguyễn Vắn B</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="">Trạng thái:</label>
              <br />
              <select>
                <option selected disabled>
                  --Trạng thái--
                </option>
                <option>Đang diễn ra</option>
                <option>Đã hoàn thành</option>
              </select>
            </div>
            <button type="submit">
              <i className="fa-solid fa-plus"></i> Thêm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ListCourse;
