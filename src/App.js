import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'


import HomePage from './pages/homepage/homepage.component.jsx'; 

function App() {
  return (
    <div>
      <Route path='/' component={HomePage}/>
    </div>
  );
}

 export default App;
