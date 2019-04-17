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

  // deleteFriend = id => {
  //   axios
  //     .delete(`http://localhost:5000/friends${id}`)
  //     .then(res => {
  //       this.setState({ friends: res.data });
  //       // this.props.history.push("/friends");
  //     })
  //     .catch(err => console.log(err));
  // };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data,
          deleteSuccess: true
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          postSuccessMessage: "",
          postError: ""
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsForm {...props} addFriend={this.addFriend} />
          )}
        />
        <Route
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
