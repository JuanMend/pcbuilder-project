import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { cpuPart, addCart } from '../../redux/pcParts';
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
				<div className={styles.cpuForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.cpu}</h3>
							<h3>Cores: {val.cores}</h3>
							<h4>${val.price}.00</h4>
						</div>
						{/* <Link to="/cart">
						<button>Add To Cart </button>
                    </Link> */}
						<div className={styles.right}>
							<div className={styles.addShopping}>
								<i onClick={() => this.props.addCart(val)} class="material-icons">
									add_shopping_cart
								</i>
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
		cpu: state.users.cpu
		// cart: state.users.cart
	};
};
export default connect(mapStateToProps, { getUser, cpuPart, addCart })(Cpu);
