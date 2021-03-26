import React, { createContext, useEffect, useReducer } from 'react';

import caseReducer, {
	CASE_START,
	GET_CASES_SUCCESS,
	GET_CASES_FAIL,
	ADD_CASE_SUCCESS,
	ADD_CASE_FAIL,
	DETAIL_CASE_SUCCESS,
	DETAIL_CASE_FAIL,
	GET_ALL_ASSETS_SUCCESS,
	GET_ALL_ASSETS_FAIL,
	GET_CASE_ASSETS_SUCCESS,
	GET_CASE_ASSETS_FAIL,
	GET_ASSETS_DETAIL_SUCCESS,
	GET_ASSETS_DETAIL_FAIL,
	ADD_ASSET_SUCCESS,
	ADD_ASSET_FAIL,
	UPDATE_CASE_SUCCESS,
	UPDATE_CASE_FAIL,
	UPDATE_ASSET_SUCCESS,
	UPDATE_ASSET_FAIL,
	SET_CURRENT_SUCCESS,
	SET_CURRENT_FAIL,
	CLEAR_CURRENT,
} from './reducer';

import {
	getAllCases,
	createCase,
	getCaseDetail as singleCaseDetail,
	getAllAssets as allRegionalAssets,
	getCaseAssets as allCaseAssets,
	getAssetDetail as singleAssetDetail,
	createAsset,
	updateCase,
	updateAsset,
} from '../../services';
import { openNotification } from '../../utils/helpers';

export const CaseContext = createContext();

const CaseProvider = (props) => {
	//with state allows you access anythig within the state
	//dispatch allows you to dispatch objects to the reducer

	const [state, dispatch] = useReducer(caseReducer, {
		cases: null,
		loading: false,
		caseDetail: null,
		error: null,
		assets: null,
		assetDetail: null,
		current:null,
	});

	const getCases = async () => {
		try {
			dispatch({ type: CASE_START });
			const res = await getAllCases();
			console.log(res);
			const data = res.data;
			dispatch({
				type: GET_CASES_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('new error', error);
			dispatch({
				type: GET_CASES_FAIL,
				payload: error.message,
			});
		}
	};

	//to create a single case
	const createACase = async (values) => {
		try {
			dispatch({ type: CASE_START });
			const res = await createCase(values);
			console.log(res.data);
			const data = res.data;
			console.log(data)
			dispatch({
				type: ADD_CASE_SUCCESS,
				payload:res.data.data
			});
		} catch (error) {
			dispatch({
				type: ADD_CASE_FAIL,
				payload: error.message,
			});
		}
	};

	//to get a single case:Case Detail page
	const getCase = async (caseId) => {
		try {
			dispatch({ type: CASE_START });
			const res = await singleCaseDetail(caseId);
			const data = res.data.data;
			console.log('asdasdada', data);
			dispatch({
				type: DETAIL_CASE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: DETAIL_CASE_FAIL,
				payload: error.message,
			});
		}
	};

	// i think this is useless since i have a put function below but i just dont want to
	//remove it yet( dont want anythin to break, things are going fine with reacet and i for something to break)
	//for put operation on cases Edit a Case
	const getCaseDetail = async (caseId) => {
		try {
			dispatch({ type: CASE_START });
			// imported api service as singleCaseDetail
			const res = await singleCaseDetail(caseId);
			console.log(res.data.data);
			const data = res.data.data;

			dispatch({
				type: GET_CASES_SUCCESS,
				payload: data,
			});
			// console.log(...res)
		} catch (error) {
			console.log('AAAAAAAAA', error);
			dispatch({
				type: GET_CASES_FAIL,
				payload: error.message,
			});
		}
	};
	//to get the datails of an assets of a partiular case
	const getAssetDetail = async (caseId) => {
		try {
			dispatch({ type: CASE_START });
			const res = await singleAssetDetail(caseId);
			console.log(res);
			const data = res.data.data;
			// console.log(res.data.data);

			dispatch({
				type: GET_ASSETS_DETAIL_SUCCESS,
				payload: data,
			});
			dispatch(getCase(data.case_id));
			// console.log(...res)
		} catch (error) {
			console.log('AAAAAAAAA', error);
			dispatch({
				type: GET_ASSETS_DETAIL_FAIL,
				payload: error.message,
			});
		}
	};

	// //To get all assets in a region
	const getAllAssets = async () => {
		try {
			dispatch({ type: CASE_START });
			// imported api service as allRegionalAssets instead of default getAllusers
			const res = await allRegionalAssets();
			const data = res.data;
			console.log(data.data);

			dispatch({
				type: GET_ALL_ASSETS_SUCCESS,
				payload: data.data,
			});
			// console.log(...res)
		} catch (error) {
			console.log('bbbbb', error);
			dispatch({
				type: GET_ALL_ASSETS_FAIL,
				payload: error.message,
			});
		}
	};

	//to get all assets of a partiular case
	const getCaseAssets = async (caseId) => {
		try {
			dispatch({ type: CASE_START });
			const res = await allCaseAssets(caseId);

			console.log(caseId);
			const data = res.data.data;
			console.log(res.data);

			dispatch({
				type: GET_CASE_ASSETS_SUCCESS,
				payload: data,
			});
			// console.log(...res)
		} catch (error) {
			console.log('AAAAAAAAA', error);
			dispatch({
				type: GET_CASE_ASSETS_FAIL,
				payload: error.message,
			});
		}
	};

	//to create a single asset for a case
	const createAnAsset = async (values) => {
		try {
			dispatch({ type: CASE_START });
			const res = await createAsset(values);
			console.log(res.data);
			const data = res.data;

			dispatch({
				type: ADD_ASSET_SUCCESS,
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: ADD_ASSET_FAIL,
				payload: error.message,
			});
		}
	};

	//to update a case
	const updateCaseItem = async (values) => {
		try {
			dispatch({ type: CASE_START });
			const res = await updateCase(values);

			console.log(res.data);
			const data = res.data;

			dispatch({
				type: UPDATE_CASE_SUCCESS,
				payload: data,
			});
			// console.log(...res)
		} catch (error) {
			console.log('AAAAAAAAA', error);
			dispatch({
				type: UPDATE_CASE_FAIL,
				payload: error.message,
			});
		}
	};

	//to update an asset of a partiular case
	const updateCaseAssets = async (caseId) => {
		try {
			dispatch({ type: CASE_START });
			const res = await updateAsset(caseId);

			console.log(caseId);
			console.log(res.data);
			const data = res.data;

			dispatch({
				type: UPDATE_ASSET_SUCCESS,
				payload: data.data,
			});
		} catch (error) {
			console.log('AAAAAAAAA', error);
			dispatch({
				type: UPDATE_ASSET_FAIL,
				payload: error.message,
			});
		}
	};

	//to update a case 2nd trial setCurrent
	const setCurrent = async (values) => {
		try {
			dispatch({ type: CASE_START });
			const res = await updateCase(values);
			const data = res.data;

			dispatch({
				type: SET_CURRENT_SUCCESS,
				payload: values,
			});
			// console.log(...res)
		} catch (error) {
			console.log(error);
			dispatch({
				type: SET_CURRENT_FAIL,
				payload: error.message,
			});
		}
	};


	//to clear a case 2nd trial setCurrent
	const clearCurrent = async () => {
		dispatch({ type: CASE_START });
		dispatch({type: CLEAR_CURRENT});
	
	};



	const { children } = props;
	console.log(state);
	return (
		<CaseContext.Provider
			value={{
				state,
				getCases, //
				createACase, //
				getCase,
				getCaseDetail, //
				getAllAssets, //
				getCaseAssets,
				getAssetDetail,
				createAnAsset,
				updateCaseItem,
				updateCaseAssets,
				setCurrent,
				clearCurrent,
			}}
		>
			{children}
		</CaseContext.Provider>
	);
};
// CaseContext

export default CaseProvider;
