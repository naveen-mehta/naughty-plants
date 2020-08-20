import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Shop from './pages/shop/shop.component.jsx'

import HomePage from './pages/homepage/homepage.component.jsx'; 

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>   
    </div>
  );
}

 export default App;
