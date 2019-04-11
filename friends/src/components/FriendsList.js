import React from "react";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>
          <button onClick={}>
              Remove
            </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
