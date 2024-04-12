function StudentSidebar() {
  return (
    <>
      <div className="side-bar-wrapper">
        <div className="item">
          <i className="fa-solid fa-qrcode"></i>
          <p>Dashboard</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Bài thi</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-file-lines"></i>
          <p>Kết quả</p>
        </div>
      </div>
    </>
  );
}

export default StudentSidebar;
