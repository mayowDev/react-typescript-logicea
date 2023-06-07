import React from 'react';
import styles from '../../styles/Table.module.scss'

import TableBody from "./tableBody";

const Table = ({ data }:any) => {
  const columns =['Tilte', 'Author',  'Created date', 'Views']
  return (
    <table  className={styles.table}>
      <thead className={styles.thead} >
        <tr className={styles.tr}>
          {columns.map(item=><th className={styles.th}>{item} </th>)}
        </tr>
    </thead>
     <TableBody style={styles}  data={data} />
    </table>
  );
};

interface ITable{
    data:[],
}

export default Table;