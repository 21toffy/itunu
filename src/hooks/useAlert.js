import { useContext } from 'react';
import { AlertContext } from '../context/alert/provider';

export const useAlert = () => {
	const alert = useContext(AlertContext);
	return {
		...alert,
	};
};
