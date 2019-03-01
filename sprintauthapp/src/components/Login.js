import React from "react";
import axios from 'axios'


class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const {name, value} = e.target

    this.setState({
      [name] : value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/login"
    
    axios.post(endpoint, this.state)
    .then(res => {
      console.log(res)
      localStorage.setItem('jwt', res.data.token)
      this.props.history.push('/jokes')
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Log In</button>
        </form>
      </>
    );
  }
}

export default Login;
