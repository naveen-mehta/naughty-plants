import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component' 
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor() {
    super()

      this.state = {
        currentUser: null
      }
  }

  //onAuthStateChanged method on the auth library opens a subscription to get real time updates on the user authentication status

  //set up property on class => unsubscribeFromAuth. This method by default is null.  

  ubsubscribeFromAuth = null 

    componentDidMount() {
      this.unsubscribeFromAuth  = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user })
      })
    }

  //onAuthStateChanged returns a function, which when called, closes the subscription. 

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>  
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/sign-in' component={SignInPage}/>      
        </Switch>
      </div>
    );
  }
}
 export default App;
