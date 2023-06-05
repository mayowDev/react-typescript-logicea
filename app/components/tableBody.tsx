import React from "react";
import _ from "lodash";
import {formatDate, formatEmail} from '../utils'

const TableBody = (props:any)=>{
  const { data, style } = props;
  const viewsStyle = (view:number)=>{
    if(_.inRange(view, 0, 25))return 'tomato'
    if(_.inRange(view, 26, 50))return 'orange'
    if(_.inRange(view, 51, 75))return 'yellow'
    if(_.inRange(view, 76, 100))return 'green'
    return 'td'

  }

  return (
    <tbody className={style.tbody}>
      {data.map((item:{id:number, Title:string,Author:string, Views:number, CreatedAt:number}) => (
        <tr key={item.id}>
          <td className={style.td}>{item.Title}</td>
          <td className={style.td}>{formatEmail(item.Author)}</td>
          <td className={style.td}>{formatDate(item.CreatedAt)}</td>
          <td className={style[viewsStyle(item.Views)]}>{item.Views}</td>
        </tr>
      ))}
    </tbody>
  );

}

export default TableBody;