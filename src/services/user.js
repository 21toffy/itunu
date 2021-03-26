import Axios from '../utils/axios';

export const loginUser = async (data) => {
	const res = Axios.post('/auth/login', data);
	console.log(res)
	return res;
};

export const registerUser = async (data) => {
	const res = Axios.post('/auth/register', data);
	return res;
};

export const loadUser = async () => {
	const res = Axios.get('/auth/me');
	return res;
};

