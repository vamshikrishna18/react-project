
import React, { Component } from 'react';
import {HashRouter,NavLink,Route} from 'react-router-dom';
import Register from "../containers/Register";
import Login from "../containers/login";
import Home from "../containers/home";
import Product from "../containers/product";
// import css from '../styles/main.css'
export default class App extends Component {
  render() {
    return (
      <div>
        
        <HashRouter>
          <div style={{"background": "red ", "display": "flex", "justifyContent": "space-around"}}>
          <NavLink to="/login" style={{"color": "white"}}>Login</NavLink><br></br><br></br>
          <NavLink to="/register" style={{"color": "white"}}>Register</NavLink><br></br>
          <NavLink to="/product" style={{"color":"white"}}>product</NavLink>
          </div>
         <Route  exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product" Component={Product} />


        </HashRouter>

      </div>
    )
  }
}
