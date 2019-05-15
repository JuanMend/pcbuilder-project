import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Build.module.scss';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';

class Build extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		return (
			<div className={styles.positionVideos}>
				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/AiVWQthb-20"
						allowfullscreen="allowfullscreen"
					/>
				</div>
				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/IhX0fOUYd8Q"
						allowfullscreen="allowfullscreen"
					/>
				</div>
				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/OZaFqY8UF6I"
						allowfullscreen="allowfullscreen"
					/>
				</div>
				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/98ujnl1_hW0"
						allowfullscreen="allowfullscreen"
					/>
				</div>

				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/gHAelSOF6f0"
						allowfullscreen="allowfullscreen"
					/>
				</div>
				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/npGL2-pRXlU"
						allowfullscreen="allowfullscreen"
					/>
				</div>

				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/hGiAfMoYEjI"
						allowfullscreen="allowfullscreen"
					/>
				</div>

				<div className={styles.frame}>
					<iframe
						width="450"
						height="315"
						src="https://www.youtube.com/embed/sjvzVJMYsDY"
						allowfullscreen="allowfullscreen"
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Build);
