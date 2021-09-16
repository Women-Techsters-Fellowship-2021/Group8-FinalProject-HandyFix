import React from "react";
import Login from "./Pages/Login";
import LandingPage from "./Pages/Landing";
import SignUp from "./Pages/SignUp";
import Choose from "./Pages/Choose";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Switch, Router
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Choose" component={Choose} />
        </Switch>
 
    </Router>
  );
}
export default App;
