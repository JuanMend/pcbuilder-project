import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { cpuPart } from '../../redux/pcParts';
import styles from './Cpu.module.scss';

class Cpu extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.cpuPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.cpu.map((val, index) => {
			return (
				<Link
					className={styles.cpuIdLink}
					to={`/item/${val.id}`}
					style={{ textDecoration: 'none', color: 'black' }}
				>
					<div className={styles.cpuForm}>
						<img className={styles.pcImage} src={val.image} />
						<div className={styles.info}>
							<div className={styles.productInfo}>
								<h3>{val.cpu}</h3>
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
		cpu: state.users.cpu
	};
};
export default connect(mapStateToProps, { getUser, cpuPart })(Cpu);
