import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import styles from './Home.module.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getUser();
	}
	render() {
		return (
			<div className={styles.homeMain}>
				<div className={styles.imageMain}>
					<Link to="/startbuild">
						<button className={styles.buildingBtn}>START BUILDING</button>
					</Link>
					<p className={styles.paragraph}>
						We're proud to present, in partnership with Razer, The Complete Guide to PC Gaming, a series of
						guides, how-tos, and deep dives into PC gaming's core concepts. Over the coming months, we'll be
						covering everything from the basics of maintaining a clean and healthy system to more complex
						subjects such as overclocking, modding, and custom liquid cooling. Our goal is to build a
						one-stop shop for all PC gamers, whether you're a veteran of the platform or you can barely tell
						a CPU from an SSD.
					</p>
				</div>

				<div className={styles.pcInfo}>
					<div className={styles.positionMonitor}>
						<Link to="/monitor">
							<button className={styles.monitorsBtn}>MONITORS</button>
						</Link>
					</div>
				</div>

				<div className={styles.videosMain}>
					<Link to="/build">
						<button className={styles.videosBtn}>Videos</button>
					</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state.reducer);
	return {
		username: state.reducer.username
	};
};

export default connect(mapStateToProps, { getUser })(Home);
