import React, { createContext, useEffect, useReducer } from 'react';

import caseReducer, {
	DASH_START,
	GET_INITIAL_SUCCESS,
	GET_FINAL_SUCCESS,
	GET_RESOLVED_SUCCESS,
	GET_CLOSED_SUCCESS,
	GET_INITIAL_FAIL,
	GET_FINAL_FAIL,
	GET_RESOLVED_FAIL,
	GET_CLOSED_FAIL,
	REQUEST_VALUATION_SUCCESS,
	REQUEST_VALUATION_FAIL,

	DETAIL_HISTORY_SUCCESS,
	DETAIL_HISTORY_FAIL,
} from './reducer';

import {
	initialCasesList,
	finalCasesList,
	resolvedCasesList,
	closedCasesList,
	caseHistory,
	// closedCasesList

} from '../../services';

export const DashboardContext = createContext();

const DashboardProvider = (props) => {
	//with state allows you access anythig within the state
	//dispatch allows you to dispatch objects to the reducer

	const [state, dispatch] = useReducer(caseReducer, {
		initial: null,
		loading: false,
		final: null,
		error: null,
		resolved: null,
		closed: null,
		historyDetail:null,
	});
	// getting cases with initial status
	const getInitial = async () => {
		try {
			dispatch({ type: DASH_START });
			const res = await initialCasesList();
			const data = res.data;
			dispatch({
				type: GET_INITIAL_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('new error', error);
			dispatch({
				type: GET_INITIAL_FAIL,
				payload: error.message,
			});
		}
	};

	// getting caes with final status
	const getFinal = async () => {
		try {
			dispatch({ type: DASH_START });
			const res = await finalCasesList();

			const data = res.data;
			dispatch({
				type: GET_FINAL_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('new error', error);
			dispatch({
				type: GET_FINAL_FAIL,
				payload: error.message,
			});
		}
	};

	// getting caes with final status
	const getResolved = async () => {
		try {
			dispatch({ type: DASH_START });
			const res = await resolvedCasesList();

			const data = res.data;
			dispatch({
				type: GET_RESOLVED_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('new error', error);
			dispatch({
				type: GET_RESOLVED_FAIL,
				payload: error.message,
			});
		}
	};

	// getting caes with final status
	const getClosed = async () => {
		try {
			dispatch({ type: DASH_START });
			const res = await   closedCasesList();
			const data = res.data;
			dispatch({
				type: GET_CLOSED_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('new error', error);
			dispatch({
				type: GET_CLOSED_FAIL,
				payload: error.message,
			});
		}
	};
  //to get a single case:Case Detail page
  const getHistory = async (caseId) => {
    try {
      dispatch({ type: DASH_START });
      const res = await caseHistory(caseId);
      const data = res.data.data;
      console.log("asdasdada", data);
      dispatch({
        type: DETAIL_HISTORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_HISTORY_FAIL,
        payload: error.message,
      });
    }
  };

	const { children } = props;
	return (
		<DashboardContext.Provider
			value={{
			initial:state.initial,			
			loading:state.loading,			
			final:state.final,
			error:state.error,
			resolved:state.resolved,
			closed:state.closed,
			historyDetail:state.historyDetail,
				getInitial,
				getFinal,
				getResolved,
				getClosed,
				getHistory,
					}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export default DashboardProvider;
