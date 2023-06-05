import React, { Component } from "react";



interface ITableHeader{
  columns:[],
  sortColumn:{
    order?:any,
    path?:any
  },
  // onSort:(arg:{})=>{},
  onSort:(arg:{})=>void

}
const TableHeader = (props:ITableHeader)=>{
 const raiseSort = (path:any) => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    props.onSort(sortColumn);
  };

 const renderSortIcon = (column:any) => {
    const { sortColumn } = props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  return (
    <thead>
      <tr>
        {props.columns.map((column:any) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );

}

export default TableHeader;