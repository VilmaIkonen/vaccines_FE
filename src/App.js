import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/HomePageContainer'
import Vaccinations from './pages/VaccinationsPage/VaccinationsPageContainer'
import VaccineOrders from './pages/VaccineOrdersPage/VaccineOrdersPageContainer'

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
