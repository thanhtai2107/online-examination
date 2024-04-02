import { Pagination } from "antd";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "./useSortableTable";
function Table({ caption, columns, data, handleUpdate, handleDelete }) {
  const [tableData, handleSorting] = useSortableTable(data);
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <caption>{caption}</caption>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody
            columns={columns}
            tableData={tableData}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </table>
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={5}
            total={tableData.length}
            size="small"
          />
        </div>
      </div>
    </>
  );
}

export default Table;
