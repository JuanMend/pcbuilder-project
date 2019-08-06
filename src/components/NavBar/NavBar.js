import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../redux/reducer';
import { getCart } from '../../redux/pcParts';
import './NavReset.scss';
import './NavBar.scss';
import logo from '../../pic/cd-logo.png';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			menu: 'close',
			signout: 'close'
		};
	}

	componentDidMoun() {
		this.props.getUser();
		this.props.getCart();
	}

	handlerClick = () => {
		if (this.state.menu === 'open') {
			this.setState({ menu: 'close' });
		} else {
			this.setState({ menu: 'open' });
		}
	};

	handleSignOut = () => {
		if (this.state.signout === 'open') {
			this.setState({ signout: 'close' });
		} else {
			this.setState({ signout: 'open' });
		}
	};
	render() {
		// if (this.props.reducer.redirect) {
		// 	return <Redirect to="/login" />;
		// }
		console.log(this.props);
		return (
			<div>
				{this.props.username ? (
					<nav class="navbar navbar-expand-lg navbar-light bg-custom">
						<Link to="/">
							<img className="logoImg" src={logo} />
						</Link>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon" />
						</button>
						<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
							<div className="profileLink">
								<img className="navImg" src={this.props.image} />
								<Link to="/profile">Welcome: {this.props.username}</Link>
							</div>
							<ul class="navbar-nav">
								<Link class="nav-link" to="/startbuild">
									<li class="nav-item ">Build</li>
								</Link>
								<Link class="nav-link" to="/build">
									<li class="nav-item">How-To</li>
								</Link>
								<Link class="nav-link" to="/pccompleted">
									<li class="nav-item">Pc-Completed</li>
								</Link>
								<li className="logout">
									<button className="signoutBtn" onClick={() => this.props.logOut()}>
										Logout
									</button>
								</li>

								<li>
									<Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
										<div className="cartLength">
											<i class="fas fa-shopping-cart" />
											{this.props.cart.length ? `(${this.props.cart.length})` : null}
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				) : (
					//FIRST NAVBAR

					<nav class="navbar navbar-expand-lg navbar-light bg-custom">
						<Link to="/">
							<img className="logoImg" src={logo} />
						</Link>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon" />
						</button>
						<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
							<ul class="navbar-nav">
								<Link class="nav-link" to="/startbuild">
									<li class="nav-item ">Build</li>
								</Link>
								<Link class="nav-link" to="/build">
									<li class="nav-item">How-To</li>
								</Link>
								<Link class="nav-link" to="/pccompleted">
									<li class="nav-item">Pc-Completed</li>
								</Link>
								<Link class="nav-link" to="/register">
									<li class="nav-item">Register</li>
								</Link>
								<Link class="nav-link" to="/login">
									<li class="nav-item">Login</li>
								</Link>
							</ul>
						</div>
					</nav>
				)}

				<div className={'menu-' + this.state.menu}>
					<ul className="side-openList">
						<li>cart</li>
						<Link to="/register">
							<li>Register</li>
						</Link>
						<Link to="/login">
							<li>Login</li>
						</Link>
					</ul>
					<ul className="side-openLinks">
						<Link to="/startbuild">
							<li> BUILD</li>
						</Link>
						<Link to="/build">
							<li>HOW-TO</li>
						</Link>
						<Link to="/pccompleted">
							<li>Pc Completed</li>
						</Link>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		image: state.reducer.image,
		cart: state.users.cart,
		reducer: state
	};
};

export default connect(mapStateToProps, { logOut, getUser, getCart })(NavBar);
