import React from "react";
import "./homePage.styles.scss";

import LeftMenu from "../../components/left-menu/left-menu.component";
import ContentSection from "../../components/content/content.component";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <LeftMenu />
        <ContentSection/>
      </div>
    );
  }
}

export default HomePage;
