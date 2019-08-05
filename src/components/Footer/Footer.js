import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import pics from '../../pic/cd-logo.png';

class Footer extends Component {
	render() {
		return (
			<div>
				<div className={styles.footerForm}>
					<div className={styles.imgDiv}>
						<img className={styles.imgFooter} src={pics} />
					</div>
					<div className={styles.email}>
						<h1>Join Us For Updates and More...</h1>
						<input className={styles.emailInput} placeholder="Email" />
					</div>
					<div className={styles.contrList}>
						<div className={styles.footerList}>
							<ul className={styles.listLinks}>
								<Link to="/startbuild">
									<li>Build</li>
								</Link>
								<Link to="/build">
									<li>How-To</li>
								</Link>
								<Link to="/pccompleted">
									<li>PC-Completed</li>
								</Link>
							</ul>
						</div>
						<div>
							<ul className={styles.listLinks}>
								<li>Contact</li>
								<li>Careers</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
