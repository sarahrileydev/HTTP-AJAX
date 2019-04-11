import React from "react";

class FriendsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addFriend(this.state)
     this.setState({
      name: "",
      age: "",
      email: ""
    });

    // this.props.history.push("/");
  };

  render() {
    return(
      <div class-name="friends-form">
      <h2>This is the form</h2>
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="name"
        value={this.state.name}
        placeholder="name"
        onChange={this.handleChange}
        />
        <input
        type="text"
        name="age"
        value={this.state.age}
        placeholder="age"
        onChange={this.handleChange}
        />
        <input
        type="text"
        name="email"
        value={this.state.email}
        placeholder="email"
        onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default FriendsForm;