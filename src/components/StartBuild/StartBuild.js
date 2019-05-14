import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { cpuPart } from '../../redux/pcParts';
import styles from './StartBuild.module.scss';

class StartBuild extends Component {
	componentDidMount() {
		this.props.getUser();
		this.props.cpuPart();
	}

	render() {
		// console.log(this.props);
		// let post = this.props.cpu.map((val, index) => {
		// 	return (
		// 		<div>
		// 			<h3>{val.cpu}</h3>
		// 			<h3>{val.cores}</h3>
		// 			<h4>{val.price}</h4>
		// 			<img src={val.image} />
		// 		</div>
		// 	);
		// });
		return (
			<div className={styles.partsMain}>
				<div className={styles.form}>
					<section>
						{/* <div className={styles.pcForm}>
							<Link to="/cpu">
								<div className={styles.displayCpu}>
									<h1>CPU</h1>
								</div>
							</Link> */}
						{/* <div className={styles.bottomForm}>
								<Link to="/cpu">
									<button className={styles.addItem}>Choose A CPU</button>
								</Link>
							</div> */}

						{/* </div> */}

						<Link to="/cpu">
							<div className={styles.container}>
								<img
									className={styles.displayCpu}
									src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMTIvc2h1dHRlcnN0b2NrXzQzNzIxMTIyOS02NzB4Mzc3LmpwZw=="
								/>
								<div className={styles.middle}>
									<div className={styles.text}>CPU</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/cpucooler">
							<div className={styles.container}>
								<img
									className={styles.displayCpuCooler}
									src="https://eteknix-eteknixltd.netdna-ssl.com/wp-content/uploads/2017/09/msi-core-frozr-xl-1-800x630.jpg"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>CPU Cooler</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/motherboard">
							<div className={styles.container}>
								<img
									className={styles.displayMotherboard}
									src="https://assets.pcmag.com/media/images/534645-gigabyte-z390-aorus-xtreme-waterforce-motherboard.jpg"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Motherboard</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/memory">
							<div className={styles.container}>
								<img
									className={styles.displayMemory}
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJVoHadccUwIUqbwdmdThDStNRM_eFTU6RXbMyMZULZyyN6ts"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Memory</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/storage">
							<div className={styles.container}>
								<img
									className={styles.displayStorage}
									src="https://www.scan.co.uk/images/3xs/infopages/storage-pc.png"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Storage</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/videocard">
							<div className={styles.container}>
								<img
									className={styles.displayVideoCard}
									src="https://amp.businessinsider.com/images/57938d7add0895e1538b4a59-750-451.jpg"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Video Card</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/case">
							<div className={styles.container}>
								<img
									className={styles.displayCase}
									src="https://i.pinimg.com/originals/0e/53/50/0e5350c438caa360aa50dfd8ebd69667.jpg"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Case</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/powersupply">
							<div className={styles.container}>
								<img
									className={styles.displayPowerSupply}
									src="http://images.bit-tech.net/content_images/2011/09/what-is-the-best-600w-psu/intro-1.jpg"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Power Supply</div>
								</div>
							</div>
						</Link>
					</section>

					<section>
						<Link to="/monitor">
							<div className={styles.container}>
								<img
									className={styles.displayMonitor}
									src="https://www.asus.com/media/global/products/VUJU1K6RZWnoMKNA/P_setting_000_1_90_end_500.png"
								/>
								<div className={styles.middle}>
									<div className={styles.text}>Monitor</div>
								</div>
							</div>
						</Link>
					</section>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cpu: state.users.cpu
	};
};
export default connect(mapStateToProps, { getUser, cpuPart })(StartBuild);
