import usersdataActionTypes from "./users-data.types";
import usersDataActionTypes from "./users-data.types";

const INITIAL_STATE = {
  usersData: [],
  currentUser:null
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersdataActionTypes.ADD_USERS_DATA:
      return {
        ...state,
        usersData: action.payload
      };

      case usersDataActionTypes.ADD_CURRENT_USER:
        return {
          ...state,
          currentUser:action.payload
        }

    default:
      return {
        state
      };
  }
};

export default usersReducer;
