import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth";

class JokesList extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    axios
      .get("/jokes")
      .then(res => {
        this.setState({
          jokes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h1>Jokes List</h1>
        <div>
          {this.state.jokes.map(joke => {
            return (
              <div key={joke.id}>
                <h2>{joke.joke}</h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default requiresAuth(JokesList);
