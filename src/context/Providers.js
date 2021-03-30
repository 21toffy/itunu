import React from 'react';
import CaseProvider from './case/provider';
import AuthProvider from './auth/provider';
import AlertProvider from './alert/provider';
import DashboardProvider from './dashdoard/provider';

const Providers = ({ children }) => {
	return (
		<AlertProvider>
			<AuthProvider>
			<CaseProvider>
				<DashboardProvider>
					{children}
				</DashboardProvider>
			</CaseProvider>
		</AuthProvider>
		</AlertProvider>
	);
};
export default Providers;
