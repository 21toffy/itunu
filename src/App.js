import './App.css';
import React from 'react';
import AppRouter from './routes';
import Providers from './context/Providers';

export const App = () => {
	return (
		<Providers>
			<AppRouter />
		</Providers>
	);
};

export default App;

