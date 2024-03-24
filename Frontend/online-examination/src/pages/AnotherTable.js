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
  return (
    <>
      <Table
        columns={columns}
        caption={"Danh sách bài thi"}
        data={tableData1}
      />
    </>
  );
}

export default AnotherTable;
