import React from "react";
import "./user-card.styles.scss";
import {connect} from 'react-redux';

import {addCurrentUserToStore} from '../../redux/usersData/users-data.action';

const UserCard = ({ user,addUser}) => {
  return (
    <div className="user-card" onClick={()=> addUser(user)}>
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

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addCurrentUserToStore(user))
});

export default connect(null,mapDispatchToProps)(UserCard);
