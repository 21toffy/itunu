import React, { useEffect } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../hooks";

const ProtectedRoute = ({ roles, ...props }) => {
  const history = useHistory();

  const {
    state: { isAuthenticated, currentUser },
  } = useAuth();

  console.log(isAuthenticated);

  useEffect(() => {
    // // Authentication Guard.
    if (isAuthenticated === false) {
      // if user is not authed
      console.log("dhsdvobvfubfuifbienfienfienofieifninoinefne");
      history.push("/login");
      // else if user is authed
    } else if (!roles.includes("ADMIN", "FINAL_FORFEITURE")) {
      // } else if (!roles.includes(currentUser?.role)) {
      history.push("/");
    }
  }, [history, roles, isAuthenticated, currentUser?.role]);

  return <Route {...props} />;
};
export default ProtectedRoute;
