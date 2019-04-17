import React from "react";

const Friend = props => {
  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(props.id);
  };

  return (
    <div className="friend-wrapper">
      <div className="friend">
        <h2>{props.friend.name}</h2>
        <p> {props.friend.age}</p>
        <p>{props.friend.email}</p>
        <button onClick={deleteFriend}>Delete</button>
      </div>
    </div>
  );
};

export default Friend;
