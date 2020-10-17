import React from "react";
import "./left-menu.styles.scss";
import { connect } from "react-redux";

import UserCard from "../user-card/user-card.component";
import image from "../../assets/userData";
import { addUsersDataToStore } from "../../redux/usersData/users-data.action";
import SearchInput from "../search/search.component";

class LeftMenu extends React.Component {
  componentDidMount() {
    let { usersData } = this.props;
    fetch("https://gorest.co.in/public-api/users")
      .then(response => response.json())
      .then(data => {
        data = data.data;
        data.forEach(element => {
          element.imgUrl =
            element.gender === "Male" ? image.male : image.female;
        });
        usersData(data);
      });
  }

  render() {
    let { dataFromStore, searchKeyword } = this.props;
    searchKeyword = searchKeyword ? searchKeyword : "";
    const filteredData =
      dataFromStore &&
      dataFromStore.filter(user => {
        return user.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
    return (
      <div className="left-menu">
        <SearchInput />
        {filteredData &&
          filteredData.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataFromStore: state.userData.usersData,
  searchKeyword: state.userData.searchValue
});

const mapDispatchToProps = dispatch => ({
  usersData: data => dispatch(addUsersDataToStore(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
