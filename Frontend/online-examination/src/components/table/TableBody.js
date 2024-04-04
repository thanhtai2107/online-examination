function TableBody({ tableData, columns, handleUpdate, handleDelete }) {
  return (
    <>
      <tbody>
        {tableData.map((data) => {
          return (
            <>
              <tr key={data.id}>
                {columns.map(({ accessor }, index) => {
                  const tData = data[accessor] ? data[accessor] : "---";
                  return <td key={index}>{tData}</td>;
                })}
                <td className="button-group">
                  <button onClick={handleUpdate} className="button-update">
                    Cập nhật
                  </button>
                  <button onClick={handleDelete} className="button-delete">
                    Xóa
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TableBody;
