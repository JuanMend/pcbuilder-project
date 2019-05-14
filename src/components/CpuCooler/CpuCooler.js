import React, { Component } from 'react';
import { cpuCoolerPart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './CpuCooler.module.scss';

class CpuCooler extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.cpuCoolerPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.cpuCooler.map((val, index) => {
			return (
				<div className={styles.cpuCoolerForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.cpu_cooler}</h3>
							<h3>Fan RPM: {val.fan_rpm}</h3>
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
		cpuCooler: state.users.cpuCooler
	};
};
export default connect(mapStateToProps, { getUser, cpuCoolerPart, addCart })(CpuCooler);
