import React, { Component } from 'react';
import { casePart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './Case.module.scss';

class Case extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.casePart();
	}

	render() {
		console.log(this.props);
		let post = this.props.case.map((val, index) => {
			return (
				<div className={styles.caseForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.case}</h3>
							<h3>Type: {val.type}</h3>
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
		case: state.users.case
	};
};
export default connect(mapStateToProps, { getUser, casePart })(Case);
