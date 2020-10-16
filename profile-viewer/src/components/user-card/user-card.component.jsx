import React from "react";
import "./user-card.styles.scss";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="user-img" src={user.imgUrl} alt="User"></img>
      <h5>ID: {user.id}</h5>
      <h4> {user.name}</h4>
      <div className="status-container">
        <div
          className={`status-icon ${
            user.status === "Active" ? "green" : "red"
          }`}
        />
        {user.status}
      </div>
    </div>
  );
};

export default UserCard;
