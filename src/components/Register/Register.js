import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, register } from '../../redux/reducer';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

class Register extends Component {
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

	handleRegister = () => {
		const { username, password, image } = this.state;
		this.props.register(username, password, image);
	};

	render() {
		if (this.props.reducer.redirect) {
			return <Redirect to="/" />;
		}
		return (
			<div className={styles.mainForm}>
				{/* <div className="form-group">
					<ToastContainer />
                </div> */}

				<section className={styles.form}>
					<div className={styles.register}>
						<h2>Register</h2>
					</div>

					<div className={styles.smallRegister}>
						<input
							className={styles.registerUsername}
							name="username"
							onChange={this.handlerChange}
							placeholder="Username"
						/>
						<input
							className={styles.registerPassword}
							name="password"
							onChange={this.handlerChange}
							placeholder="Password"
							type="password"
						/>
						<input
							className={styles.registerImage}
							name="image"
							onChange={this.handlerChange}
							placeholder="Profile Image URL"
						/>
						<button className={styles.registerBtn} onClick={this.handleRegister}>
							Register
						</button>
						<h3>
							Already a member?<Link to="/login">Sign In</Link> today
						</h3>
					</div>
				</section>
			</div>
			// <div>
			// 	<input name="image" onChange={this.handlerChange} placeholder="Image" />
			// 	<input name="username" onChange={this.handlerChange} placeholder="Username" />
			// 	<input name="password" onChange={this.handlerChange} placeholder="Password" />
			// 	<button onClick={this.handleRegister}>Register</button>
			// </div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { register })(Register);
