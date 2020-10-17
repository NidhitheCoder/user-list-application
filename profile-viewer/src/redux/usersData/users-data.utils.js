const addVisitedCount = (usersData, currentUser) => {
  usersData.map(user => {
    if (user.id === currentUser.id) {
      user.visitCount = user.visitCount ? user.visitCount + 1 : 1;
    }
    return user;
  });
  return usersData;
};

export default addVisitedCount;
