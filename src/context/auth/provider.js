import React, { createContext, useEffect, useReducer } from "react";
import authReducer, {
  AUTH_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTH_CLEAN_UP,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "./reducer";
import { loginUser, registerUser, loadUser } from "../../services";
import { useAlert } from "react-alert";
import { getToken, setToken } from "../../utils/helpers";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  //with state allows you access anythig within the state
  //dispatch allows you to dispatch objects to the reducer
  const [state, dispatch] = useReducer(authReducer, {
    data: null,
    error: null,
    loading: false,
    currentUser: null,
    isAuthenticated: false,
  });

  const login = async (values) => {
    try {
      dispatch({ type: AUTH_START });
      const res = await loginUser(values);
      const data = res.data.data.access_token;
      console.log(data);
      setToken(data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    }
  };

  const logout = () => {
    console.log("load user");
  };

  const cleanUp = () => {
    console.log("load user");
  };

  const register = async (values) => {
    try {
      dispatch({ type: AUTH_START });
      const res = await registerUser(values);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.res.message,
      });
    }
  };

  useEffect(async () => {
    onLoad();
  }, []);


  const onLoad = async () => {
    try {
		dispatch({ type: AUTH_START });
		const token = getToken();
  
		if (!token) {
		  throw Error("UnAuthenticated");
		}
		const res = await loadUser();
		console.log(res.data.data);
  
		dispatch({
		  type: LOAD_USER_SUCCESS,
		  payload: res.data.data,
		});
	  } catch (error) {
		dispatch({
		  type: LOAD_USER_FAIL,
		  payload: error.message,
		});
	  }
  };


  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        state,
        register,
        login,
        logout,
        cleanUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// try {
// 	dispatch({ type: AUTH_START });
// 	const token = getToken();

// 	if (!token) {
// 	  throw Error("UnAuthenticated");
// 	}
// 	const res = await loadUser();
// 	console.log(res.data.data);

// 	dispatch({
// 	  type: LOAD_USER_SUCCESS,
// 	  payload: res.data.data,
// 	});
//   } catch (error) {
// 	dispatch({
// 	  type: LOAD_USER_FAIL,
// 	  payload: error.message,
// 	});
//   }
