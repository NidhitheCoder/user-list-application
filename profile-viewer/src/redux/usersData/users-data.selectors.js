import { createSelector } from "reselect";

const selectCurrentUser = state => state.UsersData;

export const getCurrentUser = createSelector(
  selectCurrentUser,
  UsersData => 
  console.log(UsersData)
);
