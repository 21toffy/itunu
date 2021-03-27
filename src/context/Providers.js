import React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import CaseProvider from './case/provider';
import AuthProvider from './auth/provider';
import DashboardProvider from './dashdoard/provider';
// import { ToastProvider, useToasts } from 'react-toast-notifications';

const Providers = ({ children }) => {
	return (
		<AuthProvider>
			<CaseProvider>
				<DashboardProvider>
					<ToastProvider>{children}</ToastProvider>
				</DashboardProvider>
			</CaseProvider>
		</AuthProvider>
	);
};
export default Providers;
