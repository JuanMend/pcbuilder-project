import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateLogin } from '../../redux/reducer';
import { connect } from 'react-redux';
import styles from './Login.module.scss';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			image: ''
		};
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = () => {
		const { username, password, image } = this.state;
		this.props
			.updateLogin(username, password, image)
			.then((res) => {
				toast.success(`Welcome: ${this.props.reducer.username}`);
			})
			.catch((err) => {
				toast.error('Wrong Username or Password');
			});
		// const { username, password } = this.state;
		// axios
		// 	.post('/auth/login', { username, password })
		// 	.then((res) => {
		// 		// toast.success('Your Login');
		// 		this.setState({ redirect: true });
		// 	})
		// .catch((err) => {
		// 	toast.error('Username or Password Incorrect');
		// });
	};

	render() {
		console.log(this.props);
		if (this.props.reducer.redirect) {
			return <Redirect to="/" />;
		}
		return (
			<div className={styles.mainForm}>
				{/* <div className="form-group">
					<ToastContainer />
                </div> */}

				<section className={styles.form}>
					<div className={styles.login}>
						<h2>Login</h2>
					</div>

					<div className={styles.smallLogin}>
						<input
							className={styles.loginUsername}
							name="username"
							onChange={this.handlerChange}
							placeholder="Username"
						/>
						<input
							className={styles.loginPassword}
							name="password"
							type="password"
							onChange={this.handlerChange}
							placeholder="Password"
						/>
						<button className={styles.loginBtn} onClick={this.handleLogin}>
							Login
						</button>
						<h3>
							Don't Have an account?<Link to="/register">register </Link> today
						</h3>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { updateLogin })(Login);
