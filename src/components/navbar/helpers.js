import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../hooks";

export const Check = () => {
  const { state } = useAuth();
  const userRole = state?.data?.data?.data?.role;

  if (userRole == "ADMIN") {
    return (
      <>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/">
            <i class="fas fa-home pr-1" />
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/create-case">
            <i class="far fa-folder-open pr-1" />
            Create Case
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/all-assets">
            <i class="far fa-folder-open pr-1" />
            All Assets
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/forefeited-cases">
            <i class="far fa-folder-open pr-1" />
            Forefeited Cases
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/i/home">
            <span class="sr-only">(current)</span>dashboard
          </Link>
        </li>
      </>
    );
  }

  if (userRole == "FORFEITURE") {
    return (
      <>
        <li>
          <i className="fas fa-sign-out-alt" />
          admin
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/">
            <i class="fas fa-home pr-1" />
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/create-case">
            <i class="far fa-folder-open pr-1" />
            Create Case
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/forefeited-cases">
            <i class="far fa-folder-open pr-1" />
            Forefeited Cases
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/i/home">
            <span class="sr-only">(current)</span>dashboard
          </Link>
        </li>
      </>
    );
  }
  if (userRole == "EVALUATION") {
    return (
      <>
        {/* <li>Hello {currentUser && currentUser.name} </li> */}
        <li>
          <i className="fas fa-sign-out-alt" />
          Valuation
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/">
            <i class="fas fa-home pr-1" />
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/create-case">
            <i class="far fa-folder-open pr-1" />
            Create Case
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/forefeited-cases">
            <i class="far fa-folder-open pr-1" />
            Forefeited Cases
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/i/home">
            <span class="sr-only">(current)</span>dashboard
          </Link>
        </li>
      </>
    );
  }
  if (userRole == "ASSET") {
    return (
      <>
        {/* <li>Hello {currentUser && currentUser.name} </li> */}
        <li>
          <i className="fas fa-sign-out-alt" />
          Asset
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/">
            <i class="fas fa-home pr-1" />
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/forefeited-cases">
            <i class="far fa-folder-open pr-1" />
            Forefeited Cases
          </Link>
        </li>
        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/create-case">
            <i class="far fa-folder-open pr-1" />
            Create Case
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/create-case">
            <i class="far fa-folder-open pr-1" />
            {userRole}
          </Link>
        </li>

        <li class="nav-item mx-3 active">
          <Link class="nav-link" to="/i/home">
            <span class="sr-only">(current)</span>dashboard
          </Link>
        </li>
      </>
    );
  }
};
