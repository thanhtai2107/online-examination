import { Pagination, Table, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getExamResults } from "../redux/result/Action";
function ExamResult() {
  const { id } = useParams();
  const { Column } = Table;
  const dispatch = useDispatch();
  const result = useSelector((store) => store.result);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (current) => {
    setCurrentPage(current);
  };
  useEffect(() => {
    const data = {
      id: id,
      page: currentPage - 1,
      size: 5,
    };
    dispatch(getExamResults(data));
  }, [dispatch]);
  return (
    <>
      <div className="student-results-wrapper">
        <h3>Kết quả bài thi</h3>
        <Table
          style={{ margin: "15px 0px" }}
          dataSource={result.examResults?.content}
          tableLayout={"fixed"}
          size="small"
          pagination={false}
        >
          <Column title="Tên bài thi" dataIndex="examName" key="examName" />
          <Column title="Điểm số" dataIndex="studentName" key="studentName" />
          <Column title="Điểm số" dataIndex="score" key="score" />
          <Column
            title="Ngày thi"
            key="dateCreated"
            ellipsis
            render={(_, record) => (
              <>{new Date(record.dateCreated).toLocaleDateString("en-CA")}</>
            )}
          />
        </Table>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={result.examResults?.totalElements}
            size="small"
            current={currentPage}
            onChange={(current) => handlePageChange(current)}
          />
        </div>
      </div>
    </>
  );
}

export default ExamResult;
