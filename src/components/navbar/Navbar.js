import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../hooks";
import { useHistory } from "react-router-dom";
// import {
//   Check,
// } from "./helpers";

const Navbar = () => {
  const history = useHistory();
  const {
    state: { isAuthenticated },
    logout,
  } = useAuth();
  const { state } = useAuth();

  const userRole = state?.data?.data?.data?.role;
//   console.log(state.currentUser.role);
// console.log(state.currentUser.user.email);

  const handleLogout = (e) => {
    logout();
    history.push("/login");
  };

  const loginLink = (
    <div class="nav-item  active" style={{ float: "right;" }}>
      <Link class="nav-link" to="/login" style={{ float: "right;" }}>
        <i class="fas fa-sign-in-alt pr-1" />
        Login
      </Link>
    </div>
  );

  const logoutLink = (
    <div class="pl-5 active" style={{ float: "right;" }}>
      <button
        onClick={handleLogout}
        class="nav-link"
        style={{ float: "right;" }}
      >
        <i class="fas fa-sign-in-alt pr-1" />
        Logout:	  {state?.currentUser?.user?.email}
      </button>
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
              <>
                <li class="nav-item mx-3 active">
                  <Link class="nav-link" to="/">
                    <i class="fas fa-home pr-1" />
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item mx-3 active">
                  <Link class="nav-link" to="/create-case">
                    <i class="fas fa-folder-plus pr-2" />
                    Create Case
                  </Link>
                </li>

                <li class="nav-item mx-3 active">
                  <Link class="nav-link" to="/all-assets">
                    <i class="far fa-folder-open pr-1" />
                    All Assets
                  </Link>
                </li>

                {/* <li class="nav-item mx-3 active">
                  <Link class="nav-link" to="/i/home">
                    <span class="sr-only">(current)</span>
                    dashboard
                  </Link>
                </li> */}

                <li class="nav-item dropdown active">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More Actions
                  </a>

                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/expired-cases">
                      Expired Cases
                    </Link>

                    <Link class="dropdown-item" to="/initial-forfeitre">
                      Initial Cases
                    </Link>

                    <Link class="dropdown-item" to="/closed-cases">
                      Closed Cases
                    </Link>
                  </div>
                </li>
              </>
              <>{logoutLink}</>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useAuth } from "../../hooks";
// import { useHistory } from "react-router-dom";
// // import {
// //   Check,
// // } from "./helpers";

// const Navbar = () => {
//   const history = useHistory();
//   const {
//     state: { isAuthenticated },
//     logout,
//   } = useAuth();
//   const { state } = useAuth();

//   const userRole = state?.data?.data?.data?.role;
//   console.log(userRole);

//   const handleLogout = (e) => {
//     logout();
//     history.push("/login");
//   };

//   const loginLink = (
//     <div class="nav-item  active" style={{ float: "right;" }}>
//       <Link class="nav-link" to="/login" style={{ float: "right;" }}>
//         <i class="fas fa-sign-in-alt pr-1" />
//         Login
//       </Link>
//     </div>
//   );

//   const logoutLink = (
//     <div class="pl" style={{ float: "right;" }}>
//       <button
//         onClick={handleLogout}
//         class="nav-link"
//         style={{ float: "right;" }}
//       >
//         <i class="fas fa-sign-in-alt pr-1" />
//         Logout
//       </button>
//     </div>
//   );

//   return (
//     <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom py-1">
//       <Link class="navbar-brand govt-logo" to="/">
//         Govt Cases
//       </Link>

//       <but
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon" />
//       </but>

//       <div class="collapse navbar-collapse" id="navbarNavDropdown">
//         <div className="container">
//           {isAuthenticated ? (
//             <ul class="navbar-nav ml-auto">
//               <>

//                 <li class="nav-item mx-3 active">
//                   <Link class="nav-link" to="/">
//                     <i class="fas fa-home pr-1" />
//                     Home <span class="sr-only">(current)</span>
//                   </Link>
//                 </li>
//                 <li class="nav-item mx-3 active">
//       <Link class="nav-link" to="/create-case">
// 	  <i class="fas fa-folder-plus pr-2" />
// 	  Create Case
// 	</Link>
//   </li>

//   <li class="nav-item mx-3 active">
// 	<Link class="nav-link" to="/all-assets">
// 	  <i class="far fa-folder-open pr-1" />
// 	  All Assets
// 	</Link>
//   </li>

//                 <li class="nav-item mx-3 active">
//                   <Link class="nav-link" to="/i/home">
//                     <span class="sr-only">(current)</span>
//                     dashboard
//                   </Link>
//                 </li>

//                 <li class="nav-item dropdown active">
//                   <a
//                     class="nav-link dropdown-toggle"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
//                   >
//                     More Actions
//                   </a>

//                   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <Link class="dropdown-item" to="/expired-cases">
//                       Expired Cases
//                     </Link>

//                     <Link class="dropdown-item" to="/initial-forfeitre">
//                       Initial Cases
//                     </Link>

//                     <Link class="dropdown-item" to="/closed-cases">
//                       Closed Cases
//                     </Link>
//                   </div>
//                 </li>
//               </>
//               <>{logoutLink}</>
//             </ul>
//           ) : null}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
