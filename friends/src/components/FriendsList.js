import React from "react";
import Friend from "./Friend";

const FriendList = props => {
  console.log(props);
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          id={friend.id}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
