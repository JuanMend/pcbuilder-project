import React, { Component } from 'react';
import { cpuCoolerPart, addCart } from '../../redux/pcParts';
import { Link } from 'react-router-dom';
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
				<Link
					className={styles.IdLink}
					to={`/itemtwo/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.cpuCoolerForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>Name: {val.cpu_cooler}</h3>
								<h3>${val.price}.00</h3>
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
		cpuCooler: state.users.cpuCooler
	};
};
export default connect(mapStateToProps, { getUser, cpuCoolerPart, addCart })(CpuCooler);
