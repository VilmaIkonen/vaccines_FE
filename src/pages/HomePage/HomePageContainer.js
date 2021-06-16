import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>Vaccinations and vaccineOrders database</h1>
      <Link to='/vaccinations'><button>Vaccinations page</button></Link>
      <Link to='/vaccineorders'><button>Vaccine orders page</button></Link>
    </div>
  )
}

export default Home