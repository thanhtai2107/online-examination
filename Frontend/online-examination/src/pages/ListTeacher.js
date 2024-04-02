import Table from "../components/table/Table";

function ListTeacher() {
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
  const handlePopupAddTeachForm = () => {};
  const handlePopupUpdateTeacherForm = () => {};
  return (
    <>
      <div className="list-courses-wrapper">
        <div className="top">
          <h3>Danh sách giáo viên</h3>
          <button onClick={handlePopupAddTeachForm}>
            <i className="fa-solid fa-plus"></i>Thêm khóa học
          </button>
        </div>
        <Table
          columns={columns}
          data={data}
          handleUpdate={handlePopupUpdateTeacherForm}
        />
      </div>
    </>
  );
}

export default ListTeacher;
