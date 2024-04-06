import { useEffect, useState } from "react";
import validation from "../service/validation";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher, getTeachers } from "../redux/teacher/Action";
import { Pagination, Table, Tag, Space } from "antd";
import { useLocation } from "react-router-dom";

function ListTeacher() {
  const location = useLocation();
  const teacher = useSelector((store) => store.teacher);
  // console.log(teacher.teachers?.content);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  const { Column, ColumnGroup } = Table;

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmitAddTeacher = (e) => {
    e.preventDefault();
    const error = validation(inputData);
    setErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(addTeacher(inputData));
      handleCloseAddTeacherForm();
    }
  };
  const handlePopupAddTeachForm = () => {
    document.getElementById("add-teacher").style.display = "flex";
  };
  const handleCloseAddTeacherForm = () => {
    document.getElementById("add-teacher").style.display = "none";
  };
  const handlePopupUpdateTeacherForm = () => {
    document.getElementById("update-teacher").style.display = "flex";
  };
  const handleCloseUpdateTeacherForm = () => {
    document.getElementById("update-teacher").style.display = "none";
  };
  const handlePageChange = (current) => {
    console.log(current);
    setCurrentPage(current);
  };
  useEffect(() => {
    const data = {
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getTeachers(data));
  }, [dispatch, currentPage]);
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
                  <a onClick={handlePopupUpdateTeacherForm}>Cập nhật</a>
                  <a>Xóa</a>
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
                {errors.fullname && (
                  <span className="error">{errors.fullname}</span>
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
                {errors.email && <span className="error">{errors.email}</span>}
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
                {errors.dateOfBirth && (
                  <span className="error">{errors.dateOfBirth}</span>
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
                {errors.gender && (
                  <span className="error">{errors.gender}</span>
                )}
              </div>

              <button type="submit">Thêm</button>
            </form>
          </div>
          <div className="update-course" id="update-teacher">
            <form action="" className="form-add">
              <i
                className="fa-solid fa-xmark close"
                onClick={handleCloseUpdateTeacherForm}
              ></i>
              <h3>Cập nhật giáo viên</h3>
              <div className="input-field">
                <label htmlFor="">Tên giáo viên:</label>
                <br />
                <input type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="">Email:</label>
                <br />
                <input type="email" />
              </div>
              <div className="input-field">
                <label htmlFor="">Ngày sinh:</label>
                <br />
                <input type="date" />
              </div>
              <div className="input-field">
                <label htmlFor="">Giới tính:</label>
                <br />
                <select>
                  <option>--Giới tính--</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="">Trạng thái:</label>
                <br />
                <select>
                  <option>--Trạng thái--</option>
                  <option>Hoạt động</option>
                  <option>Ngưng hoạt động</option>
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
