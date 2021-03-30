import React, { createContext, useEffect, useReducer } from "react";
import alertReducer, {
    SET_ALERT,
    REMOVE_ALERT,

} from "./reducer";

import {v4 as uuid} from 'uuid'

export const AlertContext = createContext();

const AlertProvider = (props) => {
  //with state allows you access anythig within the state
  //dispatch allows you to dispatch objects to the reducer
  const [state, dispatch] = useReducer(alertReducer, []);


  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: {msg, type, id},
    });

    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
  };
return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;