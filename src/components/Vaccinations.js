import React, { useState } from 'react'
import Vaccination from './Vaccination'

const Vaccinations = () => {

  const [vaccinations, setVaccinations] = useState([
    
  ])

  return (
    <div>
      {vaccinations.map(vaccination => 
        <Vaccination key={vaccination._id} vaccination={vaccination} />
        )}
    </div>
  )
}

export default Vaccinations