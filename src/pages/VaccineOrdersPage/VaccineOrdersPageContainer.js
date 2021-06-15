import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const VaccineOrders = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  if(loading) {
    return 'Loading data from the database...'
  }
  if(error) {
    return 'Error while loading data'
  }
  else {
     return (
      <div>
        <h1> page for showing data about vaccine orders</h1>
        <Link to='/'><button>Back home</button></Link>
        <Link to='/vaccinations'><button>Vaccinations page</button></Link>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    )
  } 
}

export default VaccineOrders