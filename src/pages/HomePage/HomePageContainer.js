import React from 'react'
import Axios from 'axios'

const Home = () => {

  Axios({
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
    </div>
  )
}

export default Home
