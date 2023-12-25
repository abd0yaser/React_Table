// import React, { useMemo } from "react";
// import { useTable } from "react-table";
// import MOCK_DATA from "../MOCK_DATA.json";

// export default function Table() {
//   const data = useMemo(() => MOCK_DATA, []);

//   const columns = useMemo(
//     () => [
//       { Header: "ID", accessor: "id", pinned: "left" },
//       { Header: "First Name", accessor: "first_name" },
//       { Header: "Last Name", accessor: "last_name" },
//       { Header: "Email", accessor: "email" },
//       { Header: "Birth Date", accessor: "birth_date" },
//       { Header: "Age", accessor: "age" },
//       { Header: "Gender", accessor: "gender" },
//       { Header: "Country", accessor: "country", pinned: "right" },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div style={{ overflowX: "auto" }}>
//       <table
//         {...getTableProps()}
//         style={{
//           borderCollapse: "collapse",
//           width: "100%",
//         }}
//       >
//         <thead style={{ backgroundColor: "lightgrey" }}>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   style={{
//                     borderBottom: "1px solid",
//                     padding: "8px",
//                     backgroundColor: "lightgrey",
//                     position: column.pinned ? "sticky" : "inherit",
//                     left: column.pinned === "left" ? 0 : "inherit",
//                     right: column.pinned === "right" ? 0 : "inherit",
//                   }}
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} style={{ borderBottom: "1px solid" }}>
//                 {row.cells.map((cell, colIndex) => (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{
//                       padding: "8px",
//                       textAlign: "center",
//                       position: cell.column.pinned ? "sticky" : "inherit",
//                       left: cell.column.pinned === "left" ? 0 : "inherit",
//                       right: cell.column.pinned === "right" ? 0 : "inherit",
//                       backgroundColor: "white",
//                     }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useMemo } from "react";
import { useTable, useBlockLayout } from "react-table";
import { useSticky } from "react-table-sticky";

import MOCK_DATA from "../MOCK_DATA.json";
import { Styles } from "./TableStyles";

export default function Table() {
  const data = useMemo(() => MOCK_DATA, []);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id", sticky: "left" },
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Birth Date", accessor: "birth_date" },
      { Header: "Age", accessor: "age" },
      { Header: "Country", accessor: "country" },
      { Header: "Address", accessor: "address" },
      { Header: "Car Model", accessor: "car_model" },
      { Header: "Phone Number", accessor: "phone_number " },
      { Header: "Home Number", accessor: "home_number " },
      { Header: "Marital Status", accessor: "marital_status" },
      { Header: "Favorite Color", accessor: "fav_color" },
      { Header: "Postcode", accessor: "postcode" },
      { Header: "Credit Card", accessor: "credit_card", sticky: "right" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useBlockLayout, useSticky);

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width: 1000, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
}
