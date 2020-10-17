import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";

import "./search.styles.scss";
import { addSearchToStore } from "../../redux/usersData/users-data.action";

export const SearchInput = ({ AddSearch }) => {
  const handleChange = e => {
    AddSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <InputBase
        placeholder="Search Name..."
        onChange={handleChange}
        className="search"
      ></InputBase>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  AddSearch: keyword => {
    return dispatch(addSearchToStore(keyword));
  }
});

export default connect(null, mapDispatchToProps)(SearchInput);
