import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { getCart, deleteItem } from '../../redux/pcParts';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import styles from './Cart.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class Cart extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.getCart();
	}

	handleToken = async (token) => {
		console.log(token);
		const response = await axios.post('/api/checkout', { token });
		const { status } = response.data;
		console.log('Response:', response.data);
		if (status === 'success') {
			toast('Success! Check email for details', { type: 'success' });
		} else {
			toast('Something went wrong', { type: 'error' });
		}
	};

	render() {
		console.log(this.props.showLogin);
		let mappedItems = this.props.cart.map((val, index) => {
			return (
				<div key={val.id} className={styles.cpuForm}>
					<div className={styles.buttons}>
						<button onClick={() => this.props.deleteItem(val.id)} className={styles.deleteBtn}>
							X
						</button>
					</div>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3> {val.cpu_cooler}</h3>
							<h3> {val.cpu}</h3>
							<h3> {val.motherboard}</h3>
							<h3> {val.memory}</h3>
							<h3> {val.monitor}</h3>
							<h3> {val.resolution}</h3>
							<h3> {val.size}</h3>
							<h3> {val.cores}</h3>
							<h3> {val.fan_rpm}</h3>
							<h3> {val.socket_cpu}</h3>
							<h3> {val.speed}</h3>
							<h4>${val.price}.00</h4>
						</div>
						<div className={styles.right}>
							{/* <button className={styles.buyBtn}>Buy</button> */}
							<StripeCheckout
								stripeKey="pk_test_TKV642wQmuy9l9PF2zocAW0I00obBGU8vC"
								token={this.handleToken}
								amount={val.price * 100}
								name={val.cpu}
							/>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className={styles.mainForm}>
				{/* {!this.props.showLogin && <Redirect to="/login" />} */}
				{mappedItems}
				{/* {Items} */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.users.cart,
		showLogin: state.reducer.showLogin
	};
};

export default connect(mapStateToProps, { getUser, getCart, deleteItem })(Cart);
