import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "./useSortableTable";
function Table({ caption, columns, data, handleUpdate, handleDelete }) {
  const [tableData, handleSorting] = useSortableTable(data);
  return (
    <>
      <div className="table-wrapper">
        <table style={{ tableLayout: "fixed" }} className="table">
          <caption>{caption}</caption>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody
            columns={columns}
            tableData={tableData}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </table>
      </div>
    </>
  );
}

export default Table;
