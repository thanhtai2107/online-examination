import { Pagination, Table, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentExams } from "../redux/exam/Action";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getStudentByUserId } from "../redux/student/Action";

function StudentExams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exam = useSelector((store) => store.exam);
  const auth = useSelector((store) => store.auth);
  const student = useSelector((store) => store.student);
  console.log(student.student);
  console.log(auth.currentUser);
  const { Column } = Table;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    dispatch(getStudentByUserId(userId));
  }, []);
  useEffect(() => {
    const data = {
      courseId: auth.currentUser?.courseId,
      page: currentPage - 1,
      size: 5,
    };
    if (auth.currentUser !== null) {
      dispatch(getStudentExams(data));
    }
  }, [dispatch, exam.addExam, auth.currentUser]);
  return (
    <>
      <div className="list-exam-wrapper">
        <div className="top">
          <h3>Danh sách bài thi</h3>
        </div>
        <Table
          style={{ margin: "15px 0px" }}
          dataSource={exam.studentExams?.content}
          tableLayout={"fixed"}
          size="small"
          pagination={false}
        >
          <Column title="Tên bài thi" dataIndex="title" key="fullname" />
          <Column
            title="Tổng thời gian(phút)"
            dataIndex="totalTime"
            key="totalTime"
          />
          <Column
            title="Trạng thái"
            key="status"
            render={(_, record) => (
              <>{record.status === 1 ? "Đang diễn ra" : "N/A"}</>
            )}
          />
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
              <>
                {record.status === 1 ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/exam/${record.id}`)}
                  >
                    Làm bài thi
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "gray" }}
                    type="button"
                    disabled
                  >
                    Làm bài thi
                  </button>
                )}
              </>
            )}
          />
        </Table>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={exam?.exams.totalElements}
            size="small"
            current={currentPage}
            onChange={(current) => handlePageChange(current)}
          />
        </div>
      </div>
    </>
  );
}

export default StudentExams;
