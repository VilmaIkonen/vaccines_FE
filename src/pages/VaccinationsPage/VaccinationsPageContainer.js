import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { VaccinationsAllTable } from './VaccinationsAllTable'

const Vaccinations = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Getting data from DB after component render
  useEffect(() => {
    axios('http://localhost:5000/api/vaccinations')
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
      { Header: 'Bottle id', accessor: 'sourceBottle' },
      { Header: 'Recipient gender', accessor: 'gender' },
      { Header: 'Date of vaccination', accessor: 'vaccinationDate' }
    ],
  [])

  // Condional randering of the page
  if(loading) {
    return (
      <div>
        <h1>page for showing data about vaccine orders</h1>
        <p>Loading data from the database...</p>
      </div>
    )   
  }
  if(error) {
    return 'Error while loading data'
  }
  else {
     return (
      <>
        <h1>page for showing data about vaccine orders</h1>
        <VaccinationsAllTable data={data} columns={columns}/>
      </>
    )
  } 
}

export default Vaccinations