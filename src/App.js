import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component' 
import SignIn from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/sign-in-sign-up' component={SignIn}/>      
      </Switch>
    </div>
  );
}

 export default App;
