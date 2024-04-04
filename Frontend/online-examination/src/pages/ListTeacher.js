import { useState } from "react";
import Table from "../components/table/Table";
import validation from "../service/validation";
import { useDispatch } from "react-redux";
import { addTeacher } from "../redux/teacher/Action";

function ListTeacher() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmitAddTeacher = (e) => {
    e.preventDefault();
    const error = validation(inputData);
    setErrors(error);
    console.log(error);
    if (Object.keys(error).length === 0) {
      dispatch(addTeacher(inputData));
      handleCloseAddTeacherForm();
    }
  };
  const columns = [
    { label: "Tên giáo viên", accessor: "teacher_name" },
    { label: "Email", accessor: "email" },
    { label: "Ngày sinh", accessor: "date_of_birth" },
    { label: "Giới tính", accessor: "gender" },
    { label: "Trạng thái", accessor: "status" },
    { label: "Ngày tạo", accessor: "date_create" },
  ];
  const data = [
    {
      id: 1,
      teacher_name: "Nguyễn Văn A",
      email: "example@gmail.com",
      date_of_birth: "20-03-1990",
      gender: "Nam",
      status: "Hoạt động",
      date_create: "20-03-2024",
    },
  ];
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
          columns={columns}
          data={data}
          handleUpdate={handlePopupUpdateTeacherForm}
        />
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
              {errors.gender && <span className="error">{errors.gender}</span>}
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
}

export default ListTeacher;
