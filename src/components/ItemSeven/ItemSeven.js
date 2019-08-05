import React, { Component } from 'react';
import styles from './ItemSeven.module.scss';
import { connect } from 'react-redux';
import { addCart } from '../../redux/pcParts';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/reducer';

class ItemSeven extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		let caseArr = '';
		caseArr = this.props.case.map((val) => {
			if (val.id === parseInt(this.props.match.params.id)) {
				return (
					<div className={styles.insideArrItems}>
						<img className={styles.imageSide} src={val.image} />

						<div className={styles.aboutTheItem}>
							<h3>Name: {val.case}</h3>
							<h3>Type: {val.type}</h3>
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
		return <div className={styles.arrMapped}>{caseArr}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		case: state.users.case,
		cart: state.users.cart
	};
};

export default connect(mapStateToProps, { getUser, addCart })(ItemSeven);
