import React from "react";
import "./left-menu.styles.scss";
import { connect } from "react-redux";

import UserCard from "../user-card/user-card.component";
import image from "../../assets/userData";
import { addUsersDataToStore } from "../../redux/usersData/users-data.action";

class LeftMenu extends React.Component {
  componentDidMount() {
    let { usersData } = this.props;
    fetch("https://gorest.co.in/public-api/users")
      .then(response => response.json())
      .then(data => {
        data = data.data;
        data.forEach(element => {
          element.imgUrl = element.gender == "Male" ? image.male : image.female;
        });
        usersData(data);
      });
  }

  render() {
    const { dataFromStore } = this.props;
    return (
      <div className="left-menu">
        {dataFromStore &&
          dataFromStore.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataFromStore: state.userData.usersData
});

const mapDispatchToProps = dispatch => ({
  usersData: data => dispatch(addUsersDataToStore(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
