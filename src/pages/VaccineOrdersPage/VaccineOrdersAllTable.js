import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFilters, useTable } from 'react-table'

export function VaccineOrdersAllTable({ data, columns }) {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } // filter is set via useFilter hook 
    = useTable({ data, columns }, useFilters) // useFilter hook for passing filter value to table and for filtering the table rows

  const [filterInput, setFilterInput] = useState('')

  // Update filter state when change in input/keyword occurs
  const handleFilterChange = (event) => {
    let keyword = event.target.value || undefined
    setFilter('responsiblePerson', keyword) // update responsiblePerson filter
    setFilterInput(keyword)
  }

  return (
    <div>
      <Link to='/'><button>Back home</button></Link>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <input value={filterInput} onChange={handleFilterChange} placeholder={'Search name'}></input>
      <div>
        <table {...getTableProps()}>
          <thead>       
            {headerGroups.map(headerGroup => {
              return(
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => {
                    return(
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th> 
                    )                  
                  })}                                    
                </tr> 
              )        
            })}                       
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
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
