import tableData1 from "../data/tableData1.json";
import Table from "../components/table/Table";

function AnotherTable() {
  const columns = [
    { label: "Tên bài thi", accessor: "exam_name" },
    { label: "Thuộc khóa", accessor: "of_course" },
    { label: "Giáo viên", accessor: "teacher" },
    { label: "Ngày thi", accessor: "exam_date" },
    { label: "Thời gian", accessor: "time" },
  ];

  const handlePopupForm = () => {
    document.getElementById("add-exam").style.display = "flex";
  };
  const handleCloseForm = () => {
    document.getElementById("add-exam").style.display = "none";
  };
  return (
    <>
      <div className="list-exam-wrapper">
        <div className="top">
          <h3>Danh sách bài thi</h3>
          <button onClick={handlePopupForm}>
            <i class="fa-solid fa-plus"></i>Thêm bài thi
          </button>
        </div>
        <Table
          columns={columns}
          // caption={"Danh sách bài thi"}
          data={tableData1}
        />
        <div className="add-exam" id="add-exam">
          <form action="" className="form-add">
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseForm}
            ></i>
            <h3>Thêm bài thi</h3>
            <div className="input-field">
              <label htmlFor="">Tên bài thi:</label>
              <br />
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="">Thời gian:</label>
              <br />
              <input type="number" />
            </div>
            <div className="input-field">
              <label htmlFor="">Tên bài thi:</label>
              <br />
              <select>
                <option selected disabled>
                  --Lớp--
                </option>
                <option>HTML-CSS cơ bản</option>
                <option>Java nâng cao</option>
              </select>
            </div>

            <button type="submit">Thêm</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AnotherTable;
