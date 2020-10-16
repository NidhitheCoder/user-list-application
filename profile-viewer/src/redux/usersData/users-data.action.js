import usersDataActionTypes from "./users-data.types";

export const addUsersDataToStore = usersData => ({
  type: usersDataActionTypes.ADD_USERS_DATA,
  payload: usersData
});
