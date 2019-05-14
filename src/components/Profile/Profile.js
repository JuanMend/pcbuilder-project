import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser, updateProfile } from '../../redux/reducer';
import styles from './Profile.module.scss';
import axios from 'axios';
// import { updateProfile } from '../../redux/pcParts';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: ''
		};
	}
	componentDidMount() {
		this.props.getUser();
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	editProfile = () => {
		console.log(this.props);
		const { image } = this.state;
		this.props.updateProfile(image);
	};

	submitFile = (event) => {
		event.preventDefault();
		const formData = new FormData();
		console.log(this.state.file);
		formData.append('file', this.state.file[0]);
		console.log(formData);
		axios
			.post(`/test-upload`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => {
				this.setState({ image: response.data.Location });
				// handle your response;
				console.log(response);
			})
			.catch((error) => {
				// handle your error
				console.log(error);
			});
	};

	handleFileUpload = (event) => {
		this.setState({ file: event.target.files });
	};

	render() {
		return (
			<div className={styles.profileMain}>
				{/* {!this.props.showLogin && <Redirect to="/login" />} */}
				<div className={styles.profileTop}>
					<h1>Profile</h1>
					<div className={styles.smallProfileMenu}>
						<img className={styles.smallImage} src={this.props.image} />
						<h1> {this.props.username}</h1>
					</div>
				</div>

				<div className={styles.manageAvatarForm}>
					<h1 className={styles.avatar}>Manage Avatar</h1>
					<div className={styles.profileMedium}>
						<img className={styles.bigImage} src={this.props.image} />
						{/* Upload image from desktop */}
						<form className={styles.desktopForm} onSubmit={this.submitFile}>
							{/* <div className={styles.fileForm}> */}
							<h3 className={styles.uploadPhotos}>Upload Photos:</h3>
							<input
								className={styles.typeFile}
								label="upload file"
								type="file"
								onChange={this.handleFileUpload}
							/>
							<button className={styles.uploadBtn} type="submit">
								Upload
							</button>
						</form>
						{/*  */}
						{/* <input name="image" onChange={this.handlerChange} placeholder="Image" /> */}
						<button onClick={this.editProfile}>Edit</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		image: state.reducer.image,
		showLogin: state.reducer.showLogin,
		reducer: state
	};
};

export default connect(mapStateToProps, { getUser, updateProfile })(Profile);
