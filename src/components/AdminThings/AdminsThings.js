import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class AdminsThings extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false
		};
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="admin" />;
		}
		return <div>hello admin</div>;
	}
}

export default AdminsThings;
