import { useEffect, useState } from "react";
import Table from "../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacher } from "../redux/teacher/Action";
import validation from "../service/validation";
import { addCourse } from "../redux/course/Action";

function ListCourse() {
  const dispatch = useDispatch();
  const teacher = useSelector((store) => store.teacher);
  const [teacherId, setTeacherId] = useState("");
  const [title, setTitle] = useState("");
  const [addCourseErrors, setAddCourseErrors] = useState({});
  const columns = [
    { label: "Tên khóa học", accessor: "course_name" },
    { label: "Giáo viên", accessor: "teacher" },
    { label: "Ngày tạo", accessor: "date_create" },
    { label: "Trạng thái", accessor: "status" },
  ];
  const data = [
    {
      id: 1,
      course_name: "Java nâng cao",
      teacher: "Nguyễn Văn A",
      date_create: "20-03-2024",
      status: "Đang diễn ra",
    },
  ];
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

    console.log(data);
  };
  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setTeacherId(option);
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
          columns={columns}
          data={data}
          handleUpdate={handlePopupUpdateCourseForm}
        />
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
