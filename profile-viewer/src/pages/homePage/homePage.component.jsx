import React from "react";
import "./homePage.styles.scss";

import LeftMenu from '../../components/left-menu/left-menu.component';

class HomePage extends React.Component {
  render() {
    return <div className="homepage"> 
    <LeftMenu/>
    <div className="right-menu">this is the right menu</div>
    </div>;
  }
}

export default HomePage;
