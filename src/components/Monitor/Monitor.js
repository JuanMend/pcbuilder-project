import React, { Component } from 'react';
import { monitorPart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './Monitor.module.scss';

class Monitor extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.monitorPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.monitor.map((val, index) => {
			return (
				<div className={styles.monitorForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.monitor}</h3>
							<h3>Resolution: {val.resolution}</h3>
							<h3>Size: {val.size}"</h3>
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
		monitor: state.users.monitor
	};
};
export default connect(mapStateToProps, { getUser, monitorPart, addCart })(Monitor);
