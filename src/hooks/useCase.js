import { useContext } from 'react';
import { CaseContext } from '../context/case/provider';

export const useCase = () => {
	const casee = useContext(CaseContext);
	return {
		...casee,
	};
};
