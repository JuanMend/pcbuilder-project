import React, { Component } from 'react';
import { memoryPart, addCart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
import styles from './Memory.module.scss';

class Memory extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.memoryPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.memory.map((val, index) => {
			return (
				<Link
					className={styles.IdLink}
					to={`/itemfour/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.memoryForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.memory}</h3>

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
		memory: state.users.memory
	};
};
export default connect(mapStateToProps, { getUser, memoryPart, addCart })(Memory);
