import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  axios({
    method: 'GET',
    url: 'http://localhost:5000/',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res.data.message)
  })

  return (
    <div>
      <h1>Vaccinations and vaccineOrders database</h1>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <Link to='/vaccineorders'><button>Vaccine orders page</button></Link>
    </div>
  )
}

export default Home
