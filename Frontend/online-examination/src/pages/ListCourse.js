import Table from "../components/table/Table";

function ListCourse() {
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
          <form action="" className="form-add">
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseForm}
            ></i>
            <h3>Thêm khóa học</h3>
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
