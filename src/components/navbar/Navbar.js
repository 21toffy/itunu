import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../hooks';
import { useHistory } from 'react-router-dom';
// import {
//   Check,
// } from "./helpers";

const Navbar = () => {
	const history = useHistory();
	const {
		state: { isAuthenticated },
		logout,
	} = useAuth();
	const { state } = useAuth();

	const userRole = state?.data?.data?.data?.role;
	console.log(userRole);

	const handleLogout = (e) => {
		logout();
		history.push('/login');
	};

	const loginLink = (
		<div class='nav-item  active' style={{ float: 'right;' }}>
			<Link class='nav-link' to='/login' style={{ float: 'right;' }}>
				<i class='fas fa-sign-in-alt pr-1' />
				Login
			</Link>
		</div>
	);

	const logoutLink = (
		<div class='pl' style={{ float: 'right;' }}>
			<button
				onClick={handleLogout}
				class='nav-link'
				style={{ float: 'right;' }}
			>
				<i class='fas fa-sign-in-alt pr-1' />
				Logout
			</button>
		</div>
	);

	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-dark navbar-custom py-1'>
			<Link class='navbar-brand govt-logo' to='/'>
				Govt Cases
			</Link>

			<but
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon' />
			</but>

			<div class='collapse navbar-collapse' id='navbarNavDropdown'>
				<div className='container'>
					{isAuthenticated ? (
						<ul class='navbar-nav ml-auto'>
							<>
								<li>
									<i className='fas fa-sign-out-alt' />
									admin
								</li>
								<li class='nav-item mx-3 active'>
									<Link class='nav-link' to='/'>
										<i class='fas fa-home pr-1' />
										Home{' '}
										<span class='sr-only'>(current)</span>
									</Link>
								</li>
								<li class='nav-item mx-3 active'>
									<Link class='nav-link' to='/create-case'>
										<i class='far fa-folder-open pr-1' />
										Create Case
									</Link>
								</li>

								<li class='nav-item mx-3 active'>
									<Link
										class='nav-link'
										to='/forefeited-cases'
									>
										<i class='far fa-folder-open pr-1' />
										Forefeited Cases
									</Link>
								</li>

								<li class='nav-item mx-3 active'>
									<Link class='nav-link' to='/i/home'>
										<span class='sr-only'>(current)</span>
										dashboard
									</Link>
								</li>
							</>
							<>{logoutLink}</>
						</ul>
					) : null}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
