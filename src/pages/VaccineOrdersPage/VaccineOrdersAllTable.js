import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFilters, useSortBy, useTable } from 'react-table'

export function VaccineOrdersAllTable({ data, columns }) {

  const [filterInput, setFilterInput] = useState('')
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } // filter is set via useFilter hook 
    = useTable({ data, columns }, useFilters, useSortBy) // useFilter & useSortBy hook fors passing filter value to table and for filtering/sorting the table rows/columns

  // Search responsible person. Update filter state when change in input/keyword occurs
  const handleFilterChange = (event) => {
    let keyword = event.target.value || undefined
    setFilter('responsiblePerson', keyword) // update responsiblePerson filter
    setFilterInput(keyword)
  }

  return (
    <div>
      <Link to='/'><button>Back home</button></Link>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <input value={filterInput} onChange={handleFilterChange} placeholder={'Search responsible person'}></input>
      <div>
        <table {...getTableProps()}>
          <thead>       
            {headerGroups.map(headerGroup => {
              return(
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => {
                    return(
                      <th {...column.getHeaderProps(column.getSortByToggleProps())} // will allow sorting of all columns (use disableSortBy per column if needed)
                      // Based on sorting, add classNames
                      className={
                        column.isSorted 
                        ? column.isSortedDesc
                          ? 'sort-descending'
                          : 'sort-ascending'
                        : ''
                      }>
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
