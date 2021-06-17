import React from 'react'
import { Link } from 'react-router-dom'
import { useTable } from 'react-table'

export function VaccineOrdersAllTable({ data, columns }) {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ data, columns })

  return (
    <div>
      <Link to='/'><button>Back home</button></Link>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <div>
        <table {...getTableProps()}>
          <thead>           
            <tr>
              <th></th>                     
            </tr>            
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 
