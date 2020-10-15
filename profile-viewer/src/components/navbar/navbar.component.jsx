import React from "react";
import "./navbar.styles.scss";
import {Link} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";

const Navbar = () => (
  <AppBar className="app-bar">
    <div className="navigation-container">
      <div>
        <Link className="navigation-button" to='/'>Home</Link>
        <Link className="navigation-button" to='/profiles'>Profiles</Link>
      </div>
      <div>
        <InputBase placeholder="Search Name" className="search"></InputBase>
      </div>
    </div>
  </AppBar>
);

export default Navbar;
