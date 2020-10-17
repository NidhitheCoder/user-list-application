import React from "react";
import "./navbar.styles.scss";
import {Link} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";

const Navbar = () => (
  <AppBar className="app-bar">
    <div className="navigation-container">
      <div>
        <Link className="navigation-button" to='/'>Home</Link>
        <Link className="navigation-button" to='/VisitedUsers'>Visited Users</Link>
      </div>
    </div>
  </AppBar>
);

export default Navbar;
