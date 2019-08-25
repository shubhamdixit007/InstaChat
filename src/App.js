import React from 'react';
import Login from './Files/Login';
import Register from './Files/Register';
import { BrowserRouter } from "react-router-dom";
import Router from './Files/Router';
import Nav from './Files/Nav'


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn:false
    }
  }
  
  render(){
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Router />
        {/* <Login />  */}
        {/* <Register /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
