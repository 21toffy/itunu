import React, { useContext, useState, useEffect } from 'react';
import './Auth.css';
import { AuthContext } from '../../context/auth/provider';
import { useAlert } from 'react-alert';

const Register = (props) => {
	const alert = useAlert();

	const authContext = useContext(AuthContext);

	const { register, error, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'check for the backed error') {
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		re_password: '',
	});

	const { name, email, password, re_password } = user;

	const onChange = (e) =>
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	const onSumbit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			alert.show('You must Enter something!');
		} else if (password !== re_password) {
			alert.show('Passwords Do not match');
		} else {
			register({
				name,
				email,
				password,
			});
		}

		setUser({
			name: '',
			email: '',
			password: '',
			re_password: '',
		});
		console.log(user);
	};

	return (
		<div className='custom-form row justify-content-md-center'>
			<div className='col-md-6 col-md-offset-3'>
				<h2 className='h2-login text-center'>
					Account <span className='h2-span'>Register</span>
				</h2>
				<form onSumbit={onSumbit}>
					<div class='form-group'>
						<label for='exampleInputName'>Name</label>
						<input
							type='text'
							class='form-control'
							onChange={onChange}
							id='exampleInputName'
							aria-describedby='emailHelp'
							placeholder='Enter Name...'
						/>
					</div>

					<div class='form-group'>
						<label for='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							class='form-control'
							onChange={onChange}
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Enter email'
						/>
					</div>
					<div class='form-group'>
						<label for='exampleInputPassword1'>Password</label>
						<input
							type='password'
							class='form-control'
							onChange={onChange}
							id='exampleInputPassword1'
							placeholder='Password'
						/>
					</div>
					<div class='form-group'>
						<label for='exampleInputPassword2'>Password</label>
						<input
							type='password'
							class='form-control'
							onChange={onChange}
							id='exampleInputPassword2'
							placeholder='re-enter Password'
						/>
					</div>

					<p className='text-center'>
						<button
							type='submit'
							class='btn submit-form btn-lg btn-block btn-sm'
						>
							Submit &nbsp; <i class='fas fa-arrow-right'></i>
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;

// import React, { useContext, useState, useEffect } from 'react';
// import './Auth.css';
// import AuthContext from '../../context/auth/authContext'
// import { useAlert } from 'react-alert'

// const Register = () => {

//     const authContext = useContext(AuthContext)

//     const { register } = authContext;

//     const [user, setUser] = useState({
//         name:'',
//         email:'',
//         password:'',
//         re_password:'',
//     })

//     const { name, email, password, re_password, } = user;

//     const onChange = e =>
//     setUser({
//         ...user, [e.target.name]:e.target.value

//     })
//     const onSumbit = e =>{
//         e.preventDefault();
//         if(name==='' || email==='' || password===''){

//             alert.show('You must Enter something!')
//         } else if(password !== re_password){
//             alert.show('Passwords Do not match')
//         }
//         else{
//             register({
//                 name,
//                 email,
//                 password
//             })
//         }

//         setUser({
//             name:'',
//             email:'',
//             password:'',
//             re_password:'',

//         })
//         console.log(user);

//     }

//     return (
//        <div className="custom-form row justify-content-md-center">
//            <div className="col-md-6 col-md-offset-3">
//                <h2 className="h2-login">Account <span className="h2-span">Register</span></h2>
//            <form>
//            <div class="form-group">
//                     <label for="exampleInputName">Name</label>
//                     <input type="text" class="form-control" onChange={onChange} id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name..." />
//                 </div>

//                 <div class="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" class="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputPassword1">Password</label>
//                     <input type="password" class="form-control" onChange={onChange} id="exampleInputPassword1" placeholder="Password" />
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputPassword2">Password</label>
//                     <input type="password" class="form-control" onChange={onChange} id="exampleInputPassword2" placeholder="re-enter Password" />
//                 </div>

//                 <p className="text-center">
//                 <button type="button" class="btn submit-form btn-lg btn-block btn-sm">Submit &nbsp; <i class="fas fa-arrow-right"></i></button>

//                 </p>
//                 </form>
//            </div>
//        </div>
//     )
// }

// export default Register;
