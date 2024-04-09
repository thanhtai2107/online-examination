import { useEffect, useState } from "react";
import validation from "../service/validation";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  getStudent,
  getStudents,
  updateStudent,
} from "../redux/student/Action";
import { Pagination, Table, Space } from "antd";
import { allCourse } from "../redux/course/Action";

function ListStudent() {
  const student = useSelector((store) => store.student);
  const course = useSelector((store) => store.course);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    courseId: "",
  });
  const [updateData, setUpdateData] = useState({
    id: "",
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    status: "",
    courseId: "",
  });
  const { Column } = Table;

  const [addStudentErrors, setAddStudentErrors] = useState({});
  const [updateStudentErrors, setupdateStudentErrors] = useState({});
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleCourseChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setInputData({ ...inputData, courseId: option });
  };
  const handleCourseUpdateChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setUpdateData({ ...updateData, courseId: option });
  };
  const handleStatusChange = (e) => {
    const status = e.target.value;
    if (status === "Hoạt động") {
      setUpdateData({ ...updateData, status: 1 });
    } else {
      setUpdateData({ ...updateData, status: 0 });
    }
  };
  const handleChangeUpdate = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleSubmitAddStudent = (e) => {
    e.preventDefault();
    const error = validation(inputData);
    setAddStudentErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addStudent(inputData));
      handleCloseaddStudentForm();
    }
  };
  const handleSubmitupdateStudent = (e) => {
    e.preventDefault();
    const error = validation(updateData);
    setupdateStudentErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(updateStudent(updateData));
      console.log("update data", updateData);
      handleCloseupdateStudentForm();
    }
  };
  const handleDeleteTeacher = (id) => {
    // dispatch(deleteTeacher(id));
  };
  const handlePopupAddStudentForm = () => {
    document.getElementById("add-student").style.display = "flex";
  };
  const handleCloseaddStudentForm = () => {
    document.getElementById("add-student").style.display = "none";
  };
  const handlePopupupdateStudentForm = (id) => {
    document.getElementById("update-student").style.display = "flex";
    dispatch(getStudent(id));
  };
  const handleCloseupdateStudentForm = () => {
    document.getElementById("update-student").style.display = "none";
  };
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  useEffect(() => {
    dispatch(allCourse());
  }, [course.add, dispatch]);
  useEffect(() => {
    const data = {
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getStudents(data));
  }, [student.addStudent, student.updateStudent, dispatch]);
  useEffect(() => {
    setUpdateData({
      id: student.student?.id,
      fullname: student.student?.fullname,
      email: student.student?.email,
      dateOfBirth: new Date(student.student?.dateOfBirth).toLocaleDateString(
        "en-CA"
      ),
      gender: student.student?.gender,
      status: student.student?.status === "Hoạt động" ? 1 : 0,
      courseId: student.student?.courseId,
    });
  }, [student.student]);
  if (student?.students) {
    return (
      <>
        <div className="list-courses-wrapper">
          <div className="top">
            <h3>Danh sách học sinh</h3>
            <button onClick={handlePopupAddStudentForm}>
              <i className="fa-solid fa-plus"></i>Thêm học sinh
            </button>
          </div>

          <Table
            style={{ margin: "15px 0px" }}
            dataSource={student.students?.content}
            tableLayout={"fixed"}
            size="small"
            pagination={false}
          >
            <Column title="Tên học sinh" dataIndex="fullname" key="fullname" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column
              title="Ngày sinh"
              dataIndex="dateOfBirth"
              key="dateOfBirth"
              ellipsis
            />
            <Column
              title="Giới tính"
              dataIndex="gender"
              key="gender"
              width={80}
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
                  <a onClick={() => handlePopupupdateStudentForm(record.id)}>
                    Cập nhật
                  </a>
                  <a onClick={() => handleDeleteTeacher(record.id)}>Xóa</a>
                </Space>
              )}
            />
          </Table>

          <div className="pagination">
            <Pagination
              defaultCurrent={1}
              total={student?.students.totalElements}
              size="small"
              current={currentPage}
              onChange={(current) => handlePageChange(current)}
            />
          </div>
          <div className="add-course" id="add-student">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitAddStudent}
            >
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseaddStudentForm}
              ></i>
              <h3>Thêm học sinh</h3>
              <div className="input-field">
                <label htmlFor="">Tên học sinh:</label>
                <br />
                <input
                  type="text"
                  value={inputData.fullname}
                  name="fullname"
                  onChange={(e) => handleChange(e)}
                />
                {addStudentErrors.fullname && (
                  <span className="error">{addStudentErrors.fullname}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="email"
                  onChange={(e) => handleChange(e)}
                  value={inputData.email}
                  name="email"
                />
                {addStudentErrors.email && (
                  <span className="error">{addStudentErrors.email}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Ngày sinh:</label>
                <br />
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  value={inputData.dateOfBirth}
                  name="dateOfBirth"
                />
                {addStudentErrors.dateOfBirth && (
                  <span className="error">{addStudentErrors.dateOfBirth}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Giới tính:</label>
                <br />
                <select
                  onChange={(e) => handleChange(e)}
                  name="gender"
                  defaultValue="--Giới tính--"
                >
                  <option disabled>--Giới tính--</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
                {addStudentErrors.gender && (
                  <span className="error">{addStudentErrors.gender}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Khóa học:</label>
                <br />
                <select
                  onChange={(e) => handleCourseChange(e)}
                  name="gender"
                  defaultValue="--Khóa học--"
                >
                  <option disabled>--Khóa học--</option>
                  {course.allCourse &&
                    course.allCourse.map((item) => {
                      return (
                        <>
                          <option key={item.id} id={item.id}>
                            {item.title}
                          </option>
                        </>
                      );
                    })}
                </select>
                {addStudentErrors.courseId && (
                  <span className="error">{addStudentErrors.courseId}</span>
                )}
              </div>
              <button type="submit">Thêm</button>
            </form>
          </div>
          <div className="update-course" id="update-student">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitupdateStudent}
            >
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseupdateStudentForm}
              ></i>
              <h3>Cập nhật học sinh</h3>
              <div className="input-field">
                <label htmlFor="">Tên học sinh:</label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  value={updateData.fullname}
                  onChange={(e) => handleChangeUpdate(e)}
                />
                {updateStudentErrors.fullname && (
                  <span className="error">{updateStudentErrors.fullname}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="email"
                  readOnly
                  name="email"
                  onChange={(e) => handleChangeUpdate(e)}
                  value={updateData.email}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Ngày sinh:</label>
                <br />
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={(e) => handleChangeUpdate(e)}
                  value={updateData.dateOfBirth}
                />
                {updateStudentErrors.dateOfBirth && (
                  <span className="error">
                    {updateStudentErrors.dateOfBirth}
                  </span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Giới tính:</label>
                <br />
                <select
                  value={updateData.gender}
                  onChange={(e) => handleChangeUpdate(e)}
                  name="gender"
                >
                  <option>--Giới tính--</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
                {updateStudentErrors.gender && (
                  <span className="error">{updateStudentErrors.gender}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Trạng thái:</label>
                <br />
                <select
                  value={
                    updateData.status === 1 ? "Ngưng hoạt động" : "Hoạt động"
                  }
                  onChange={(e) => handleStatusChange(e)}
                  name="status"
                >
                  <option>--Trạng thái--</option>
                  <option>Hoạt động</option>
                  <option>Ngưng hoạt động</option>
                </select>
                {updateStudentErrors.status && (
                  <span className="error">{updateStudentErrors.status}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Khóa học:</label>
                <br />
                <select
                  onChange={(e) => handleCourseUpdateChange(e)}
                  name="gender"
                  defaultValue="--Khóa học--"
                >
                  <option disabled>--Khóa học--</option>
                  {course.allCourse &&
                    course.allCourse.map((item) => {
                      if (student.student?.courseId === item.id) {
                        return (
                          <option selected key={item.id} id={item.id}>
                            {item.title}
                          </option>
                        );
                      } else {
                        return (
                          <option key={item.id} id={item.id}>
                            {item.title}
                          </option>
                        );
                      }
                    })}
                </select>
                {addStudentErrors.courseId && (
                  <span className="error">{addStudentErrors.courseId}</span>
                )}
              </div>
              <button type="submit">
                <i className="fa-solid fa-plus"></i> Thêm
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="list-courses-wrapper">
          <div className="top">
            <h3>Danh sách học sinh</h3>
            <button onClick={handlePopupAddStudentForm}>
              <i className="fa-solid fa-plus"></i>Thêm học sinh
            </button>
          </div>
          <div className="add-course" id="add-student">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitAddStudent}
            >
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseaddStudentForm}
              ></i>
              <h3>Thêm học sinh</h3>
              <div className="input-field">
                <label htmlFor="">Tên học sinh:</label>
                <br />
                <input
                  type="text"
                  value={inputData.fullname}
                  name="fullname"
                  onChange={(e) => handleChange(e)}
                />
                {addStudentErrors.fullname && (
                  <span className="error">{addStudentErrors.fullname}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="email"
                  onChange={(e) => handleChange(e)}
                  value={inputData.email}
                  name="email"
                />
                {addStudentErrors.email && (
                  <span className="error">{addStudentErrors.email}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Ngày sinh:</label>
                <br />
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  value={inputData.dateOfBirth}
                  name="dateOfBirth"
                />
                {addStudentErrors.dateOfBirth && (
                  <span className="error">{addStudentErrors.dateOfBirth}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Giới tính:</label>
                <br />
                <select
                  onChange={(e) => handleChange(e)}
                  name="gender"
                  defaultValue="--Giới tính--"
                >
                  <option disabled>--Giới tính--</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
                {addStudentErrors.gender && (
                  <span className="error">{addStudentErrors.gender}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Khóa học:</label>
                <br />
                <select
                  onChange={(e) => handleCourseChange(e)}
                  name="gender"
                  defaultValue="--Khóa học--"
                >
                  <option disabled>--Khóa học--</option>
                  {course.allCourse &&
                    course.allCourse.map((item) => {
                      return (
                        <>
                          <option key={item.id} id={item.id}>
                            {item.title}
                          </option>
                        </>
                      );
                    })}
                </select>
                {addStudentErrors.courseId && (
                  <span className="error">{addStudentErrors.courseId}</span>
                )}
              </div>
              <button type="submit">Thêm</button>
            </form>
          </div>
          <p
            style={{
              fontSize: "13px",
              marginTop: "10px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Không có dữ liệu
          </p>
        </div>
      </>
    );
  }
}

export default ListStudent;
