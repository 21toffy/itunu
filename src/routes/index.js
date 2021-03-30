import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { ROUTES } from "../constants";
import ProtectedRoute from "./ProtectedRoute.js";
import Alert from "../components/alert/Alerts";

const AppRouter = (props) => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <Router basename={baseUrl}>
      <Navbar />

      <div className="container">
        <Alert />
        <Switch>
          {ROUTES.map((route) => {
            return route.protected ? (
              <ProtectedRoute exact {...route} {...props} />
            ) : (
              <Route exact {...route} {...props} />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
