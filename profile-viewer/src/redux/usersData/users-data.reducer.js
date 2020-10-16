import usersdataActionTypes from "./users-data.types";

const INITIAL_STATE = {
  usersData: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersdataActionTypes.ADD_USERS_DATA:
      return {
        ...state,
        usersData: action.payload
      };

    default:
      return {
        state
      };
  }
};

export default usersReducer;
