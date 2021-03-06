import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import PizzaHomePage from './components/pizzahomepage/PizzaHomePage';
import PizzaMenu from './components/pizzamenu/PizzaMenu';
import PizzeriaInformation from './components/PizzeriaInformation/PizzeriaInformation';
import PizzaOrders from './components/pizzaorders/PizzaOrders';
import PageNotFound from './components/pizzapagenotfound/PizzaPageNotFound';
import PizzaNavBar from './components/pizzahomepage/PizzaNavbar';
class App extends React.Component
{
  render()
  {
    return(
      <div>
        <BrowserRouter>
        <PizzaNavBar/>
          <Switch>
            <Route exact path="/" component={PizzaHomePage}/>
            <Route exact path="/Menu" component={PizzaMenu}/>
            <Route exact path="/PizzeriaInformation" component={PizzeriaInformation}/>
            <Route exact path="/Orders" component={PizzaOrders}/>
            <Route component={PageNotFound}/>
          </Switch> 
        </BrowserRouter> 
      </div>
    )
  }
}

export default App;
