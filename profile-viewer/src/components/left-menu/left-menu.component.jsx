import React from "react";
import "./left-menu.styles.scss";

import UserCard from "../user-card/user-card.component";

class LeftMenu extends React.Component {
  render() {
    const users = [
      { id: 1, name: "Arman" },
      { id: 2, name: "Jothish" },
      { id: 3, name: "Arjun" },
      { id: 4, name: "July" },
      { id: 5, name: "Arya" },
      { id: 6, name: "Vijith" }
    ];

    return (
      <div className="left-menu">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default LeftMenu;
