import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homePage/homePage.component";
import VisitedUsers from "./pages/VisitedUsers/VisitedUsers.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/VisitedUsers" component={VisitedUsers} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
