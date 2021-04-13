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
  CLEAR_ERROR,
} from "./reducer";
import { loginUser, registerUser, loadUser } from "../../services";
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
      const data = res.data.data;
      setToken(data.access_token);
      // alert("Login Success");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.response);
      const err = error?.response?.data;
      console.log(err?.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: err?.message,
      });
    }
  };

  const logout = () => {
    try {
      dispatch({ type: AUTH_START });

      localStorage.removeItem("user:token");

      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
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

  const onLoad = async () => {
    try {
      dispatch({ type: AUTH_START });
      const token = getToken();

      if (!token) {
        throw Error("UnAuthenticated");
      }
      const res = await loadUser();

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
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  useEffect(() => {
    onLoad();
  }, []);

  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        state,
        authState: state,
        register,
        login,
        logout,
        cleanUp,
        clearErrors,
        onLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
