import React, { Component } from 'react';
import { powerSupplyPart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
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
				<Link
					className={styles.IdLink}
					to={`/itemeight/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.powerSupplyForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.power_supply}</h3>
								<h4>${val.price}.00</h4>
							</div>
						</div>
					</div>
				</Link>
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
