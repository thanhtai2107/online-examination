function Dashboard() {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Giảng Viên</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> 50</span>
            </p>
          </div>
          <button>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-graduation-cap"></i> <p>Học Sinh</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> 50</span>
            </p>
          </div>
          <button>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-newspaper"></i> <p>Bài Thi</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> 50</span>
            </p>
          </div>
          <button>Xem</button>
        </div>
        <div className="widgets-wrapper">
          <div className="content">
            <i className="fa-solid fa-layer-group"></i>
            <p>Khóa học</p>
          </div>
          <div className="count">
            <p>
              Tổng:
              <span> 50</span>
            </p>
          </div>
          <button>Xem</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
