import React, { useMemo } from "react";
import { useTable, useSticky } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";

export default function Table() {
  const data = useMemo(() => MOCK_DATA, []);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Birth Date", accessor: "birth_date" },
      { Header: "Age", accessor: "age" },
      { Header: "Country", accessor: "country", sticky: "right" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSticky);

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        {...getTableProps()}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead style={{ backgroundColor: "lightgrey" }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "1px solid ",
                    padding: "8px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderBottom: "1px solid " }}>
                {row.cells.map((cell, colIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      position:
                        cell.column.sticky === "right" ? "sticky" : "inherit",
                      right: 0,
                      backgroundColor: "white",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
