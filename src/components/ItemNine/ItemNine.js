import React, { Component } from 'react';
import styles from './ItemNine.module.scss';
import { connect } from 'react-redux';
import { addCart } from '../../redux/pcParts';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/reducer';
class ItemNine extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		let monitorArr = '';
		monitorArr = this.props.monitor.map((val) => {
			if (val.id === parseInt(this.props.match.params.id)) {
				return (
					<div className={styles.insideArrItems}>
						<img className={styles.imageSide} src={val.image} />

						<div className={styles.aboutTheItem}>
							<h3>Name: {val.monitor}</h3>
							<h3>Resolution: {val.resolution}</h3>
							<h3>Size: {val.size}"</h3>
							<h4>${val.price}.00</h4>
							<div className={styles.right}>
								<div className={styles.addShopping}>
									{this.props.username !== '' ? (
										<button onClick={() => this.props.addCart(val)} className={styles.addToCartBtn}>
											ADD TO CART
										</button>
									) : (
										<Link to="/login">
											<h1>Login Before Adding Items into cart</h1>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				);
			}
		});
		return <div className={styles.arrMapped}>{monitorArr}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		monitor: state.users.monitor,
		cart: state.users.cart
	};
};

export default connect(mapStateToProps, { getUser, addCart })(ItemNine);
