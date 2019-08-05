import React, { Component } from 'react';
import { monitorPart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
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
				<Link
					className={styles.IdLink}
					to={`/itemnine/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.monitorForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.monitor}</h3>
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
		monitor: state.users.monitor
	};
};
export default connect(mapStateToProps, { getUser, monitorPart })(Monitor);
