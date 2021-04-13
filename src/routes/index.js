import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import ProtectedRoute from "./ProtectedRoute.js";
import Alert from "../components/alert/Alerts";
import Navbar from "../components/navbar/Navbar";

const AppRouter = (props) => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <Router basename={baseUrl}>
      <Navbar />

      <div className="container-fluid">
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
