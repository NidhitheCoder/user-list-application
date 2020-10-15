import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homePage/homePage.component";
import Profiles from "./pages/profiles/profiles.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profiles" component={Profiles} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
