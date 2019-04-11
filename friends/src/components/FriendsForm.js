import React from "react";

class FriendsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return(
      <div class-name="friends-form">
      <h2>This is the form</h2>
      <form>
        <input
        type="text"
        name="input"
        value={this.state.input}
        placeholder="Add a friend..."
        />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default FriendsForm;