import React, { Component } from "react";
import "./App.css";

import { NavLink, Route, withRouter } from "react-router-dom";

import JokesList from "./components/JokesList";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  logout = e => {
    e.preventDefault();

    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/jokes">Users</NavLink>
          <button onClick={this.logout}>Log Out</button>
        </div>

        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jokes" component={JokesList} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
