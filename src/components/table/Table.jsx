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
                <div
                  {...column.getHeaderProps()}
                  className={`th ${column.isSticky ? "sticky" : ""}`}
                  // Apply the data-sticky-td attribute to the right column
                  data-sticky-td={
                    column.id === "credit_card" ? "right" : undefined
                  }
                >
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
                  <div
                    {...cell.getCellProps()}
                    className={`td ${cell.column.isSticky ? "sticky" : ""}`}
                    // Apply the data-sticky-td attribute to the right column
                    data-sticky-td={
                      cell.column.id === "credit_card" ? "right" : undefined
                    }
                  >
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
