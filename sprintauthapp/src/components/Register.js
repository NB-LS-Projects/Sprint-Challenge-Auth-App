import React from "react";

class Register extends React.Component {
  render() {
    return (
      <>
        <h1>Register Form</h1>
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
          <button type="submit">Log In</button>
        </form>
      </>
    );
  }
}

export default Register;
