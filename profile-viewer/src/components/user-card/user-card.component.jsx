import React from "react";
import "./user-card.styles.scss";

const UserCard = ({user}) => { 
   return <div className="user-card">{user.name}</div>
};

export default UserCard;
