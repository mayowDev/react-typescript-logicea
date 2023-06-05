import React from 'react';
import styles from '../styles/Table.module.scss'

import TableBody from "./tableBody";

const Table = ({ data }:ITable) => {
  const columns =['Tilte', 'Author', 'Views', 'Created date']
  return (
    <table  className={styles.table}>
      <thead className={styles.thead} >
        <tr className={styles.tr}>
          {columns.map(item=><th className={styles.th}>{item} </th>)}
            {/* // <th className={styles.th}>Tilte </th>
            // <th className={styles.th}>Author </th>
            // <th className={styles.th}>Created Date</th>
            // <th className={styles.th}>Views</th> */}
        </tr>
    </thead>
     <TableBody style={styles}  data={data} />
    </table>
  );
};

interface ITable{
    columns:[],
    sortColumn:{},
    data:[],
    onSort:() => void
    // onSort:React.MouseEvent<HTMLElement>

}

export default Table;