import React, { useState, useEffect } from 'react';
import './Auth.css';
import { useAuth } from '../../hooks';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Spinner from '../../components/spinner/Spiner';
import { Route, useHistory, Redirect } from 'react-router-dom';

const Login = () => {
	const { addToast } = useToasts();
	const { login, state, loading } = useAuth();
	const history = useHistory();
	// abonuoha@gmail.com

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (state.isAuthenticated) history.push('/');
	}, [history, state.isAuthenticated]);

	const handleSubmit = (e) => {
		e.preventDefault();
		login(values);
	};

	console.log('login', state);

	const onChange = (e) =>
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	if (loading) {
		return <Spinner />;
	}

	return (
		<div className='banner'>
			<div className='custom-form row justify-content-md-center .bg-form bg-form'>
				<div className='col-md-6 col-md-offset-3'>
					<h2 className='h2-login text-center'>
						Account <span className='h2-span'>Login</span>
					</h2>
					<form onSubmit={handleSubmit}>
						<div class='form-group'>
							<label>Email address</label>
							<input
								type='email'
								class='form-control'
								placeholder='Enter email'
								onChange={onChange}
								name='email'
								value={values.email}
								required
							/>
						</div>
						<div class='form-group'>
							<label>Password</label>
							<input
								type='password'
								class='form-control'
								placeholder='Password'
								onChange={onChange}
								name='password'
								value={values.password}
								required
							/>
						</div>

						<p className='text-center'>
							<button
								type='submit'
								class='btn submit-form btn-lg btn-block btn-sm'
							>
								Submit &nbsp; <i class='fas fa-arrow-right' />
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
