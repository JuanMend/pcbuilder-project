import React, { Component } from 'react';
import { videoCardPart } from '../../redux/pcParts';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './VideoCard.module.scss';

class VideoCard extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.videoCardPart();
	}

	render() {
		console.log(this.props);
		let post = this.props.videoCard.map((val, index) => {
			return (
				<div className={styles.videoCardForm}>
					<img className={styles.pcImage} src={val.image} />
					<div className={styles.info}>
						<div className={styles.productInfo}>
							<h3>{val.video_card}</h3>
							<h3>Memory: {val.memory_size}</h3>
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
		videoCard: state.users.videoCard
	};
};
export default connect(mapStateToProps, { getUser, videoCardPart })(VideoCard);
