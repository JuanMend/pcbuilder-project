import React, { Component } from 'react';
import { casePart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
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
				<Link
					className={styles.IdLink}
					to={`/itemseven/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.caseForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.case}</h3>
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
		case: state.users.case
	};
};
export default connect(mapStateToProps, { getUser, casePart })(Case);
