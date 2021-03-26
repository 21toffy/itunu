import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../hooks";
import {
  Check,
} from "./helpers";

const Navbar = () => {
  const {
    state: { isAuthenticated },
    logout,
  } = useAuth();
  const { state } = useAuth();

  const userRole = state?.data?.data?.data?.role;
  console.log(userRole);


  const loginLink = (
      <div class="nav-item  active" style={{float:"right;"}}>
        <Link class="nav-link" to="/login" style={{float:"right;"}}  >
          <i class="fas fa-sign-in-alt pr-1" />Login
        </Link>
      </div>
  );

  const logoutLink = (
    
      <div class="pl" style={{float:"right;"}}>
        <Link class="nav-link" to="/logout" style={{float:"right;"}}  >
          <i class="fas fa-sign-in-alt pr-1" />Logout
        </Link>
      </div>
  );

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom py-1">
      <Link class="navbar-brand govt-logo" to="/">
        Govt Cases
      </Link>

      <but
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </but>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="container">
          {isAuthenticated ? (
            
              <ul class="navbar-nav ml-auto">
                <Check/>
              <>{logoutLink}</>
              </ul>

            
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
