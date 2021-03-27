export const AUTH_START = 'AUTH_START';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const AUTH_CLEAN_UP = 'AUTH_CLEAN_UP';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

const authReducer = (state, action) => {
	switch (action.type) {
		case AUTH_START:
			return {
				...state,
				loading: true,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				data: action.payload,
				currentUser: action.payload,
				error: null,
			};

		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				data: null,
				currentUser: null,
				error: action.payload,
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};

		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				data: null,
				error: action.payload,
			};

		case LOGOUT_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				data: null,
				currentUser: null,
				error: null,
			};

		case LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				data: null,
				error: action.payload,
			};

		case LOAD_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				data: action.payload,
				currentUser: action.payload,
				error: null,
			};

		case LOAD_USER_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				data: null,
				currentUser: null,
				error: action.payload,
			};

		default:
			return state;
	}
};
export default authReducer;
