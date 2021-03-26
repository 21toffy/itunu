export const getToken = () => (
	localStorage.getItem('user:token')
);

export const setToken = (token) => {
	localStorage.setItem('user:token', token);
};

export const clearStorage = () => localStorage.clear();
