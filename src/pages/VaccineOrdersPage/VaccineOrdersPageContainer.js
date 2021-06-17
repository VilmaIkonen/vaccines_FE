import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { VaccineOrdersAllTable } from './VaccineOrdersAllTable'

const VaccineOrders = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Getting data from DB after component ren
  useEffect(() => {
    axios('http://localhost:5000/api/vaccineorders')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Setting columns for the table
  const columns = useMemo(() => [    
      { Header: 'Order number', accessor: 'orderNumber' },
      { Header: 'Responsible person', accessor: 'responsiblePerson' },
      { Header: 'Healthcare district', accessor: 'healthCareDistrict' },
      { Header: 'Vaccine', accessor: 'vaccine' },
      { Header: 'No. of injections/bottle', accessor: 'injections' },
      { Header: 'Arrival date', accessor: 'arrived' },
    ],
  [])

  // Conditional randering of the page
  if(loading) {
    return (
      <div>
        <h1>page for showing data about vaccine orders</h1>
        <p>Loading data from the database...</p>
      </div>
    )}
  if(error) {
    return 'Error while loading data'
  }
  else {
     return (
       <>
        <h1>page for showing data about vaccine orders</h1>
        <VaccineOrdersAllTable data={data} columns={columns}/>
      </>
    )
  } 
}

export default VaccineOrders