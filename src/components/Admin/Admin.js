import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { adminLogin } from '../../redux/reducer';
import { connect } from 'react-redux';
import styles from './Admin.module.scss';

class Admin extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = () => {
		const { username, password } = this.state;
		this.props.adminLogin(username, password);
	};

	render() {
		if (this.props.reducer.redirect) {
			return <Redirect to="/login" />;
		}
		return (
			<div>
				<input className={styles.input} name="username" onChange={this.handleChange} />
				<input name="password" onChange={this.handleChange} />
				<button onClick={this.handleLogin}>Login</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { adminLogin })(Admin);
