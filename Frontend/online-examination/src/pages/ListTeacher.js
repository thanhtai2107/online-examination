import { useEffect, useState } from "react";
import validation from "../service/validation";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeacher,
  deleteTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
} from "../redux/teacher/Action";
import { Pagination, Table, Space } from "antd";

function ListTeacher() {
  const teacher = useSelector((store) => store.teacher);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  const [updateData, setUpdateData] = useState({
    id: "",
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    status: "",
  });
  const { Column } = Table;

  const [addTeacherErrors, setAddTeacherErrors] = useState({});
  const [updateTeacherErrors, setUpdateTeacherErrors] = useState({});
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleChangeUpdate = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleSubmitAddTeacher = (e) => {
    e.preventDefault();
    const error = validation(inputData);
    setAddTeacherErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addTeacher(inputData));
      handleCloseAddTeacherForm();
    }
  };
  const handleSubmitUpdateTeacher = (e) => {
    e.preventDefault();
    const error = validation(updateData);
    setUpdateTeacherErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(updateTeacher(updateData));
      console.log("update data", updateData);
      handleCloseUpdateTeacherForm();
    }
  };
  const handleDeleteTeacher = (id) => {
    dispatch(deleteTeacher(id));
  };
  const handlePopupAddTeachForm = () => {
    document.getElementById("add-teacher").style.display = "flex";
  };
  const handleCloseAddTeacherForm = () => {
    document.getElementById("add-teacher").style.display = "none";
  };
  const handlePopupUpdateTeacherForm = (id) => {
    document.getElementById("update-teacher").style.display = "flex";
    dispatch(getTeacher(id));
  };
  const handleCloseUpdateTeacherForm = () => {
    document.getElementById("update-teacher").style.display = "none";
  };
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  useEffect(() => {
    const data = {
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getTeachers(data));
  }, [dispatch, currentPage, teacher.update, teacher.delete]);
  useEffect(() => {
    setUpdateData({
      id: teacher.teacher?.id,
      fullname: teacher.teacher?.fullname,
      email: teacher.teacher?.email,
      dateOfBirth: new Date(teacher.teacher?.dateOfBirth).toLocaleDateString(
        "en-CA"
      ),
      gender: teacher.teacher?.gender,
      status: teacher.teacher?.status === "Hoạt động" ? 1 : 0,
    });
  }, [teacher.teacher]);
  if (teacher.teachers?.content) {
    return (
      <>
        <div className="list-courses-wrapper">
          <div className="top">
            <h3>Danh sách giáo viên</h3>
            <button onClick={handlePopupAddTeachForm}>
              <i className="fa-solid fa-plus"></i>Thêm giáo viên
            </button>
          </div>

          <Table
            style={{ margin: "15px 0px" }}
            dataSource={teacher.teachers?.content}
            tableLayout={"fixed"}
            size="small"
            pagination={false}
          >
            <Column
              title="Tên giáo viên"
              dataIndex="fullname"
              key="fullname"
              // sorter={{
              //   compare: (a, b) => a.fullname - b.fullname,
              //   multiple: 3,
              // }}
            />
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
                  <p
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => handlePopupUpdateTeacherForm(record.id)}
                  >
                    Cập nhật
                  </p>
                  <p
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => handleDeleteTeacher(record.id)}
                  >
                    Xóa
                  </p>
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
          <div className="add-course" id="add-teacher">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitAddTeacher}
            >
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseAddTeacherForm}
              ></i>
              <h3>Thêm giáo viên</h3>
              <div className="input-field">
                <label htmlFor="">Tên giáo viên:</label>
                <br />
                <input
                  type="text"
                  value={inputData.teacher_name}
                  name="fullname"
                  onChange={(e) => handleChange(e)}
                />
                {addTeacherErrors.fullname && (
                  <span className="error">{addTeacherErrors.fullname}</span>
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
                {addTeacherErrors.email && (
                  <span className="error">{addTeacherErrors.email}</span>
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
                {addTeacherErrors.dateOfBirth && (
                  <span className="error">{addTeacherErrors.dateOfBirth}</span>
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
                {addTeacherErrors.gender && (
                  <span className="error">{addTeacherErrors.gender}</span>
                )}
              </div>

              <button type="submit">Thêm</button>
            </form>
          </div>
          <div className="update-course" id="update-teacher">
            <form
              action=""
              className="form-add"
              onSubmit={handleSubmitUpdateTeacher}
            >
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseUpdateTeacherForm}
              ></i>
              <h3>Cập nhật giáo viên</h3>
              <div className="input-field">
                <label htmlFor="">Tên giáo viên:</label>
                <br />
                <input
                  type="text"
                  name="fullname"
                  value={updateData.fullname}
                  onChange={(e) => handleChangeUpdate(e)}
                />
                {updateTeacherErrors.fullname && (
                  <span className="error">{updateTeacherErrors.fullname}</span>
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
                {updateTeacherErrors.dateOfBirth && (
                  <span className="error">
                    {updateTeacherErrors.dateOfBirth}
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
                {updateTeacherErrors.gender && (
                  <span className="error">{updateTeacherErrors.gender}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="">Trạng thái:</label>
                <br />

                <select
                  value={
                    updateData.status === 1 ? "Ngưng hoạt động" : "Hoạt động"
                  }
                  onChange={(e) => handleChangeUpdate(e)}
                  name="status"
                >
                  <option>--Trạng thái--</option>
                  <option>Hoạt động</option>
                  <option>Ngưng hoạt động</option>
                </select>
                {updateTeacherErrors.status && (
                  <span className="error">{updateTeacherErrors.status}</span>
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
        <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "600" }}>
          Không có dữ liệu
        </p>
      </>
    );
  }
}

export default ListTeacher;
