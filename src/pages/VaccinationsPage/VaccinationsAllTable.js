import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFilters, usePagination, useSortBy, useTable } from 'react-table'

export function VaccinationsAllTable({ data, columns }) {

  const [filterInput, setFilterInput] = useState('')
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    prepareRow,
    /*rows*/ page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter } // filter is set via useFilter hook. For pagination 'page' is used instead of rows
  = useTable({ 
      data, 
      columns,
      initialState: { } // defaults to pageIndex and pageSize are 0 and 10 respectively
    }, 
      useFilters, 
      useSortBy,
      usePagination
    ) // useFilter & useSortBy hook fors passing filter value to table and for filtering/sorting the table rows/columns

  // Search bottle id. Update filter state when change in input/keyword occurs
  const handleFilterChange = (event) => {
    let keyword = event.target.value || undefined
    setFilter('sourceBottle', keyword) // update sourceBottle filter
    setFilterInput(keyword)
  }

  return (
    <div>
      <Link to='/'><button>Back home</button></Link>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <input value={filterInput} onChange={handleFilterChange} placeholder={'Search source bottle id'}></input>
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
            {page.map((row) => {
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
        <div className='pagination'>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
          <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>{'>>'}</button>
          <span>Page{' '}
            <strong>{pageIndex +1} of {pageOptions.length}</strong>
          </span>
          {/* Moving to user selected page no.: */}
          <span>{' '}Go to page:{' '}
            <input 
              type='number'
              defaultValue={pageIndex +1}
              onChange={event => {
                let page = event.target.value ? Number(event.target.value) -1 : 0
                gotoPage(page)
              }}
            />
          </span>
          {/* User selection of rows to show/page */}
          <select
            value={pageSize}
            onChange={event => {
              setPageSize(Number(event.target.value))
            }}  
          >
            {[10, 20, 50, 100].map(pageSize => {
              return <option key={pageSize} value={pageSize}>Show {pageSize}</option>       
            })}            
          </select>
        </div>
      </div>
    </div>
  )
}
