function AdminSidebar() {
  return (
    <>
      <div className="side-bar-wrapper">
        <div className="item">
          <i className="fa-solid fa-qrcode"></i>
          <p>Dashboard</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-user"></i>
          <p>Quản lý giáo viên</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-user"></i>
          <p>Quản lý học sinh</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Quản lý bài thi</p>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
