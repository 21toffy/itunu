import { useContext } from 'react';
import { DashboardContext } from '../context/dashdoard/provider';

export const useDash = () => {
	const dash = useContext(DashboardContext);
	return {
		...dash,
	};
};
