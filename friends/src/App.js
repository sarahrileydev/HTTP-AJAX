import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Route
        exact
          path="/"
          render={props => (
            <FriendsForm {...props} addFriend={this.addFriend} />
          )}
        />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
