import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

const Hats = () =>(
    <h1>Hats Page</h1>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>
    
  );
}

export default App;
