import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.styles.scss';
import {auth} from './firebase/firebase.utils';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      });
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
      
    );
  }
  
}

export default App;
