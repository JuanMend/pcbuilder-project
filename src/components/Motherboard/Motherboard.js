import React, { Component } from 'react';
import { motherboardPart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
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
				<Link
					className={styles.IdLink}
					to={`/itemthree/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.motherboardForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.motherboard}</h3>
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
		motherboard: state.users.motherboard
	};
};
export default connect(mapStateToProps, { getUser, motherboardPart, addCart })(Motherboard);
