import usersDataActionTypes from "./users-data.types";
import addVisitedCount from './users-data.utils'


const INITIAL_STATE = {
  usersData: [],
  currentUser: null,
  searchValue: ""
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
        usersData: addVisitedCount(state.usersData,action.payload)
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
