export const GET_INITIAL_SUCCESS = "GET_INITIAL_SUCCESS";
export const GET_FINAL_SUCCESS = "GET_FINAL_SUCCESS";
export const GET_RESOLVED_SUCCESS = "GET_RESOLVED_SUCCESS";
export const GET_CLOSED_SUCCESS = "GET_CLOSED_SUCCESS";
export const GET_INITIAL_FAIL = "GET_INITIAL_FAIL";
export const GET_FINAL_FAIL = "GET_FINAL_FAIL";
export const GET_RESOLVED_FAIL = "GET_RESOLVED_FAIL";
export const GET_CLOSED_FAIL = "GET_CLOSED_FAIL";
export const DASH_START = "DASH_START";
export const REQUEST_VALUATION_SUCCESS = "REQUEST_VALUATION_SUCCESS";
export const REQUEST_VALUATION_FAIL = "REQUEST_VALUATION_FAIL";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case DASH_START:
      return {
        ...state,
        loading: true,
      };
    case GET_INITIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        initial: action.payload,
        error: null,
      };
    case GET_INITIAL_FAIL:
      return {
        ...state,
        loading: false,
        initial: null,
        error: action.payload,
      };

    case GET_FINAL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        final: action.payload,
      };

    case GET_FINAL_FAIL:
      return {
        ...state,
        loading: false,
        final: null,
        error: action.payload,
      };
    case GET_RESOLVED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        resolved: action.payload,
      };
    case GET_RESOLVED_FAIL:
      return {
        ...state,
        loading: false,
        resolved: null,
        error: action.payload,
      };

    case GET_CLOSED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        closed: action.payload,
      };
    case GET_CLOSED_FAIL:
      return {
        ...state,
        loading: false,
        closed: null,
        error: null,
      };


      // Button / form to request valuation on an expired date

      case REQUEST_VALUATION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          closed: action.payload,
        };
      case REQUEST_VALUATION_FAIL:
        return {
          ...state,
          loading: false,
          closed: null,
          error: null,
        };



    default:
      return state;
  }
};
export default dashboardReducer;
