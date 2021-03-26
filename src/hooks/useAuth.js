import { useContext } from 'react';
import { AuthContext } from '../context/auth/provider';

export const useAuth = () => {
	const auth = useContext(AuthContext);
	return {
		...auth,
	};
};
