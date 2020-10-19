import React from "react";
import "./VisitedUsers.styles.scss";
import { connect } from "react-redux";

import UserCard from "../../components/user-card/user-card.component";

const Profiles = ({ UsersDataFromStore }) => {
  return (
    <div className="visited-users">
      <h1>Visited Users</h1>
      <div className="card-container">
        {UsersDataFromStore && UsersDataFromStore.length ? (
          UsersDataFromStore.map(user => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="no-users"> No visited users </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  UsersDataFromStore: state.userData.visitedUsers
});

export default connect(mapStateToProps)(Profiles);
