import React from "react";
import "./user-card.styles.scss";

const UserCard = ({user}) => { 
   return <div className="user-card">
   <img className="user-img" src={user.imgUrl} alt ="User"></img>
   <h5>ID: {user.id}</h5>
   <h1> {user.name}</h1>
   </div>
};

export default UserCard;
