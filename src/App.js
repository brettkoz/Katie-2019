import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import PrivateAdminRoute from "./components/common/PrivateAdminRoute";
import ClientDashboard from "./components/client-dashboard/ClientDashboard";
import Landing from "./components/Landing";
import "./components/styles/animate.css";
import "./App.css";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="appContainer d-flex flex-column">
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Switch>
            <PrivateAdminRoute path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/client-dashboard"
              component={ClientDashboard}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
