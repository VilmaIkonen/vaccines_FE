import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  // Condional randering of the page
  if(loading) {
    return 'Loading data from the database...'
  }
  if(error) {
    return 'Error while loading data'
  }
  else {
     return (
      <div>
        <h1> page for showing data about vaccinations</h1>
        <Link to='/'><button>Back home</button></Link>
        <Link to='/vaccineorders'><button>Vaccine orders page</button></Link>
        <table>
          <thead>
            <tr>
              <th>Vaccination id</th>
              <th>Bottle id</th>
              <th>Recipient gender</th>
              <th>Date of vaccination</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
              <td>{item.vaccinationId}</td>
              <td>{item.sourceBottle}</td>
              <td>{item.gender}</td>
              <td>{item.vaccinationDate}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    )
  } 
}

export default Vaccinations