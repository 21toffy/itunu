import React, { useEffect } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../hooks";


// const ProtectedRoute = ({ component: Component, user, ...rest }) => {
//   return (
//     <Route {...rest} render={
//       props => {
//         if (user) {
//           return <Component {...rest} {...props} />
//         } else {
//           return <Redirect to={
//             {
//               pathname: '/unauthorized',
//               state: {
//                 from: props.location
//               }
//             }
//           } />
//         }
//       }
//     } />
//   )
// }

const ProtectedRoute = ({ roles, ...props }) => {
  // const { authState } = useAuth();
  // const { currentUser } = authState;
  const history = useHistory();
  
  const {
    state: { isAuthenticated, currentUser },
  } = useAuth();
  
  console.log(isAuthenticated);
  // console.log(currentUser)

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




// const ProtectedRoute = ({ roles, ...props }) => {
//   const history = useHistory();

//   const {
//     state: { isAuthenticated, currentUser },
//   } = useAuth();

//   console.log(isAuthenticated);

//   useEffect(() => {
//     // // Authentication Guard.
//     if (isAuthenticated === false) {
//       // if user is not authed
//       console.log("dhsdvobvfubfuifbienfienfienofieifninoinefne");
//       history.push("/login");
//       // else if user is authed
//     } else if (!roles.includes("ADMIN", "FINAL_FORFEITURE")) {
//       // } else if (!roles.includes(currentUser?.role)) {
//       history.push("/");
//     }
//   }, [history, roles, isAuthenticated, currentUser?.role]);

//   return <Route {...props} />;
// };
// export default ProtectedRoute;















// import React, { useEffect } from "react";
// import { Route, useHistory, Redirect } from "react-router-dom";
// import { useAuth } from "../hooks";



// const ProtectedRoute = ({ roles, ...props }) => {
//   // const { authState } = useAuth();
//   // const { currentUser } = authState;
//   const history = useHistory();

//   const {
//     state: { isAuthenticated, currentUser },
//   } = useAuth();

//   // console.log(currentUser.role);

//   useEffect(() => {
//     // // Authentication Guard.
//     if (isAuthenticated === false) {
//       // if user is not authed
//       console.log(currentUser);

//       console.log("dhsdvobvfubfuifbienfienfienofieifninoinefne");
//       history.push("/login");
//       // else if user is authed
//     } else if (
//       !currentUser?.role?.includes(
//         "ADMIN",
//         "FINAL_FORFEITURE",
//         "HQ",
//         "EVALUATION",
//         "FORFEITURE",
//         "INITIAL_FORFEITURE",
//         "ASSET",
//         "VALUATION"
//       )
//     ) {
//       // } else if (!roles.includes(currentUser?.role)) {
//       history.push("/");
//     }
//   }, [history, roles, isAuthenticated, currentUser?.role]);

//   return <Route {...props} />;
// };
// export default ProtectedRoute;

