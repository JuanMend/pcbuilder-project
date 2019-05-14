import React, { Component } from 'react';
import { powerSupplyPart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './PowerSupply.module.scss';

class PowerSupply extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.powerSupplyPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.powerSupply.map((val, index) => {
			return (
				<div className={styles.powerSupplyForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.power_supply}</h3>
							<h3>Form Factor: {val.Form_Factor}</h3>
							<h4>${val.price}.00</h4>
						</div>
						<div className={styles.right}>
							<div className={styles.addShopping}>
								<i class="material-icons">add_shopping_cart</i>
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
		powerSupply: state.users.powerSupply
	};
};
export default connect(mapStateToProps, { getUser, powerSupplyPart })(PowerSupply);
