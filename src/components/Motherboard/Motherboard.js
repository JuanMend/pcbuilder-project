import React, { Component } from 'react';
import { motherboardPart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './Motherboard.module.scss';

class Motherboard extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.motherboardPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.motherboard.map((val, index) => {
			return (
				<div className={styles.motherboardForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.motherboard}</h3>
							<h3>Socket/CPU: {val.socket_cpu}</h3>
							<h4>${val.price}.00</h4>
						</div>
						<div className={styles.right}>
							<div className={styles.addShopping}>
								<i onClick={() => this.props.addCart(val)} class="material-icons">
									add_shopping_cart
								</i>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return <div className={styles.allCpuParts}>{post}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		motherboard: state.users.motherboard
	};
};
export default connect(mapStateToProps, { getUser, motherboardPart, addCart })(Motherboard);
