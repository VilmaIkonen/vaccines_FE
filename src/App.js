import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vaccinations from './pages/Vaccinations'
import VaccineOrders from './pages/VaccineOrders'

const App = () => {
  return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/vaccineorders' exact component={VaccineOrders} />
          <Route path='/vaccinations' exact component={Vaccinations} />
        </Switch> 
  );
}

export default App;
