import usersDataActionTypes from "./users-data.types";

export const addUsersDataToStore = usersData => ({
  type: usersDataActionTypes.ADD_USERS_DATA,
  payload: usersData
});

export const addCurrentUserToStore = currentUser => ({
  type: usersDataActionTypes.ADD_CURRENT_USER,
  payload: currentUser
});

export const addSearchToStore = keyword => ({
  type: usersDataActionTypes.ADD_SEARCH,
  payload: keyword
});
