const AddVisitedUsers = (visitedUsers, currentUser) => {
  console.log(visitedUsers)
  const existingItem = visitedUsers && visitedUsers.find(user => user.id === currentUser.id);

  if (!existingItem) {
    return [...visitedUsers, { ...currentUser }];
  }
  return visitedUsers;
};

export default AddVisitedUsers;
