import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { postPcCompleted, getPcCompleted } from '../../redux/pcParts';
import styles from './PcCompleted.module.scss';

class PcCompleted extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.getPcCompleted();
		this.props.postPcCompleted();
	}
	render() {
		console.log(this.props.pcCompleted);
		let post = this.props.pcCompleted.map((val, index) => {
			return (
				<div className={styles.mappedForm}>
					<img className={styles.completedImage} src={val.image} />
					<div className={styles.descriptionForm}>
						<h3>{val.description}</h3>
					</div>
					<div className={styles.completedPriceForm}>
						<h3>${val.price}.00</h3>
					</div>
				</div>
			);
		});
		return (
			<div className={styles.completedForm}>
				<div className={styles.buildsMain}>
					<h3>Builds</h3>
					<Link to="btnpccompleted">
						<button className={styles.completedPcBtn}>Create a Completed Pc</button>
					</Link>
				</div>
				<div className={styles.postContainer}>{post}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		pcCompleted: state.users.pcCompleted
	};
};
export default connect(mapStateToProps, { getUser, getPcCompleted, postPcCompleted })(PcCompleted);
