export const CASE_START = "CASE_START";
export const ADD_CASE_SUCCESS = "ADD_CASE_SUCCESS";
export const ADD_CASE_FAIL = "ADD_CASE_FAIL";
export const GET_CASES_SUCCESS = "GET_CASES_SUCCESS";
export const GET_CASES_FAIL = "GET_CASES_FAIL";
export const UPDATE_CASE_SUCCESS = "UPDATE_CASE_SUCCESS";
export const UPDATE_CASE_FAIL = "UPDATE_CASE_FAIL";
export const DETAIL_CASE_SUCCESS = "DETAIL_CASE_SUCCESS";
export const DETAIL_CASE_FAIL = "DETAIL_CASE_FAIL";
export const GET_CASE_ASSETS_SUCCESS = "GET_CASE_ASSETS_SUCCESS";
export const GET_CASE_ASSETS_FAIL = "GET_CASE_ASSETS_FAIL";
export const GET_ALL_ASSETS_SUCCESS = "GET_ALL_ASSETS_SUCCESS";
export const GET_ALL_ASSETS_FAIL = "GET_ALL_ASSETS_FAIL";
export const GET_ASSETS_DETAIL_SUCCESS = "GET_ASSETS_DETAIL_SUCCESS";
export const GET_ASSETS_DETAIL_FAIL = "GET_ASSETS_DETAIL_FAIL";
export const ADD_ASSET_SUCCESS = "ADD_ASSET_SUCCESS";
export const ADD_ASSET_FAIL = "ADD_ASSET_FAIL";
export const UPDATE_ASSET_SUCCESS = "UPDATE_ASSET_SUCCESS";
export const UPDATE_ASSET_FAIL = "UPDATE_ASSET_FAIL";
export const SET_CURRENT_SUCCESS = "SET_CURRENT_SUCCESS";
export const SET_CURRENT_FAIL = "SET_CURRENT_FAIL";
export const CLEAR_CURRENT = "CLEAR_CURRENT";
export const LIST_ERROR = "LIST_ERROR";
export const FILTER_LIST = "FILTER_LIST";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CASE_HISTORY_SUCCESS = "CASE_HISTORY_SUCCESS";
export const CASE_HISTORY_FAIL = "CASE_HISTORY_FAIL";

const caseReducer = (state, action) => {
  switch (action.type) {
    case CASE_START:
      return {
        ...state,
        loading: true,
      };
    case GET_CASES_SUCCESS:
      return {
        ...state,
        loading: false,
        cases: action.payload,
        error: null,
      };
    case GET_CASES_FAIL:
      return {
        ...state,
        loading: false,
        cases: null,
        error: action.payload,
      };

    case ADD_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        // cases:[...state.cases, action.payload]
      };

    case ADD_CASE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DETAIL_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        caseDetail: action.payload,
        error: null,
      };

    case DETAIL_CASE_FAIL:
      return {
        ...state,
        loading: false,
        caseDetail: null,
        error: action.payload,
      };

    case GET_ALL_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        assets: action.payload,
        error: null,
      };
    case GET_ALL_ASSETS_FAIL:
      return {
        ...state,
        loading: false,
        assets: null,
        error: action.payload,
      };

    case GET_CASE_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        // caseDetail: action.payload,
        error: null,
        // assetDetail: action.payload,
        assets: action.payload,
      };
    case GET_CASE_ASSETS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        assets: null,
      };

    case GET_ASSETS_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        assetDetail: action.payload,
        caseDetail: action.payload.case_id,
      };
    case GET_ASSETS_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        assetDetail: null,
      };
    case ADD_ASSET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        assets: [...state.assets, action.payload],
      };

    case ADD_ASSET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        caseDetail: action.payload,
        error: null,
      };

    case UPDATE_CASE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_ASSET_SUCCESS:
      return {
        ...state,
        loading: false,
        assetDetail: action.payload,
        error: null,
      };

    case UPDATE_ASSET_FAIL:
      return {
        ...state,
        loading: false,
        assetDetail:null,
        error: action.payload,
      };

    case FILTER_LIST:
      return {
        ...state,
        filtered: state.cases.filter((cas) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return cas.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
export default caseReducer;
