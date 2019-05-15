import React, { Component } from 'react';
import { storagePart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './Storage.module.scss';

class Storage extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.storagePart();
	}

	render() {
		console.log(this.props);
		let post = this.props.storage.map((val, index) => {
			return (
				<div className={styles.storageForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.storage}</h3>
							<h3>Capacity: {val.capacity}</h3>
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
		storage: state.users.storage
	};
};
export default connect(mapStateToProps, { getUser, storagePart, addCart })(Storage);
