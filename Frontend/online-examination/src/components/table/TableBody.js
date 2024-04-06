function TableBody({ tableData, columns, handleUpdate, handleDelete }) {
  return (
    <tbody key={1}>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              let tData = data[accessor] ? data[accessor] : "---";
              if (accessor === "status") {
                if ((data[accessor] = 1)) {
                  tData = "Hoạt động";
                } else {
                  tData = "Ngưng hoạt động";
                }
              }
              return (
                <td
                  key={accessor}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "nowrap",
                  }}
                >
                  {tData}
                </td>
              );
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
        );
      })}
    </tbody>
  );
}

export default TableBody;
