import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component.jsx'
import Header from './components/header.component'
import HomePage from './pages/homepage/homepage.component.jsx'; 

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>   
      </Switch>
    </div>
  );
}

 export default App;
