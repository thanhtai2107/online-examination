import { useState } from "react";

function TableHead({ columns, handleSorting }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <>
      <thead>
        <tr>
          {columns.map(({ label, accessor, width }) => {
            return (
              <th
                style={{ width: width }}
                key={accessor}
                onClick={() => handleSortingChange(accessor)}
              >
                <h4>{label}</h4>
                <i className="fa-solid fa-sort"></i>
              </th>
            );
          })}
          <th></th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
