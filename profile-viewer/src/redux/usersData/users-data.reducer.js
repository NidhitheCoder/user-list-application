import usersDataActionTypes from "./users-data.types";
import AddVisitedUsers from "./users-data.utils";

const INITIAL_STATE = {
  usersData: [],
  currentUser: null,
  searchValue: "",
  visitedUsers: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersDataActionTypes.ADD_USERS_DATA:
      return {
        ...state,
        usersData: action.payload
      };

    case usersDataActionTypes.ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        visitedUsers: AddVisitedUsers(
          state.visitedUsers ? state.visitedUsers : [],
          action.payload
        )
      };
    case usersDataActionTypes.ADD_SEARCH:
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return {
        state
      };
  }
};

export default usersReducer;
