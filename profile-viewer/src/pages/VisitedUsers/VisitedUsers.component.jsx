import React from "react";
import "./VisitedUsers.styles.scss";
import { connect } from "react-redux";

import UserCard from "../../components/user-card/user-card.component";

const Profiles = ({ UsersDataFromStore }) => {
  let userData =
    UsersDataFromStore &&
    UsersDataFromStore.filter(user => user.visitCount !== undefined);

  return (
    <div className="visited-users">
    <h1>Visited Users</h1>
      <div class="card-container">
        {userData ? (
          userData.map(user => <UserCard key={user.id} user={user} />)
        ) : (
          <div> No visited users </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  UsersDataFromStore: state.userData.usersData
});

export default connect(mapStateToProps)(Profiles);
