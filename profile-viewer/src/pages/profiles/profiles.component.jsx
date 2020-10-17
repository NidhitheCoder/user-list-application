import React from "react";
import './profiles.styles.scss';

import UserCard from '../../components/user-card/user-card.component';

const Profiles = () => (
  <div className="profiles-container">
   <UserCard user={{name:"",imgUrl:"",status:"Active"}}/>
  </div>
);

export default Profiles;
