import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { getCart, deleteItem, updateCartTotal, clearCart } from '../../redux/pcParts';
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
		let total = this.props.cart.map((val) => parseFloat(val.price)).reduce((prev, next) => prev + next, 0);
		this.props.updateCartTotal(total);
		let mappedItems = this.props.cart.map((val, index) => {
			return (
				<div key={val.id} className={styles.cpuForm}>
					<ul className={styles.cartListOfProd}>
						<li>
							<img className={styles.pcImage} src={val.image} />
						</li>
						<div className={styles.insideArrItemsList}>
							<li className={styles.priceOne}>${val.price}.00</li>
							<li>{val.power_supply}</li>
							<li>{val.storage}</li>
							<li>{val.video_card}</li>
							<li>{val.case}</li>
							<li> {val.cpu_cooler}</li>
							<li> {val.cpu}</li>
							<li> {val.motherboard}</li>
							<li> {val.memory}</li>
							<li> {val.monitor}</li>
							<li>${val.price}.00</li>
							<li>
								<div className={styles.buttons}>
									<button onClick={() => this.props.deleteItem(val.id)} className={styles.deleteBtn}>
										X
									</button>
								</div>
							</li>
						</div>
					</ul>
				</div>
			);
		});

		return (
			<div>
				{this.props.cart[0] ? (
					<div className={styles.mainForm}>
						<ul className={styles.listCartProd}>
							<li>Product</li>
							<li>Price</li>
							<li>Name</li>
							<li>Total</li>
							<li>Delete</li>
						</ul>
						<div className={styles.orderTotal}>
							Order Total: ${total ? parseFloat(total.toFixed(2)) : null}.00
							<div className={styles.forCheckout}>
								<Checkout name={'CyberDigital'} amount={this.props.updateCartTotal} />
							</div>
						</div>

						{mappedItems}
					</div>
				) : (
					<div className={styles.noItems}>
						<div className={styles.emptyCart}>
							<h2>Your Cart is Empty!</h2>
						</div>
						<div className={styles.noItemsTwo}>
							<img
								className={styles.emptyCartImg}
								src="http://www.simsonpharma.com/assets/frontend/images/empty-card.png"
							/>
							<Link to="/startbuild">
								<button className={styles.cartShopBtn}>Shop Now</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		cart: state.users.cart,
		// cart: state.reducer.cart,
		showLogin: state.reducer.showLogin,
		cartTotal: state.users.cartTotal
	};
};

export default connect(mapStateToProps, { getUser, getCart, deleteItem, updateCartTotal, clearCart })(Cart);

{
	/* <img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.power_supply}</h3>
							<h3>{val.storage}</h3>
							<h3>{val.video_card}</h3>
							<h3>{val.case}</h3>
							<h3> {val.cpu_cooler}</h3>
							<h3> {val.cpu}</h3>
							<h3> {val.motherboard}</h3>
							<h3> {val.memory}</h3>
							<h3> {val.monitor}</h3>
							<h4>${val.price}.00</h4>
							<div className={styles.buttons}>
								<button onClick={() => this.props.deleteItem(val.id)} className={styles.deleteBtn}>
									X
								</button>
							</div>
						</div> */
}

// if (this.props.cart.length > 0) {
// 	let total = this.props.cart.map((item) => parseFloat(item.price)).reduce((prev, next) => prev + next, 0);
// 	this.props.updateCartTotal(total);

// 	let mappedItems = this.props.cart.map((val, index) => {
// 		return (
// 			<div key={val.id} className={styles.cpuForm}>
// 				<ul className={styles.cartListOfProd}>
// 					<li>
// 						<img className={styles.pcImage} src={val.image} />
// 					</li>
// 					<div className={styles.insideArrItemsList}>
// 						<li className={styles.priceOne}>${val.price}.00</li>
// 						<li>{val.power_supply}</li>
// 						<li>{val.storage}</li>
// 						<li>{val.video_card}</li>
// 						<li>{val.case}</li>
// 						<li> {val.cpu_cooler}</li>
// 						<li> {val.cpu}</li>
// 						<li> {val.motherboard}</li>
// 						<li> {val.memory}</li>

// 						<li> {val.monitor}</li>
// 						<li>${val.price}.00</li>
// 						<li>
// 							<div className={styles.buttons}>
// 								<button
// 									onClick={() => this.props.deleteItem(val.id)}
// 									className={styles.deleteBtn}
// 								>
// 									X
// 								</button>
// 							</div>
// 						</li>
// 					</div>
// 				</ul>
// 			</div>
// 		);
// 	});
// }
