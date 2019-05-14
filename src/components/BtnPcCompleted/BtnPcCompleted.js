import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import { postPcCompleted } from '../../redux/pcParts';
import styles from './BtnPcCompleted.module.scss';
class BtnPcCompleted extends Component {
	constructor() {
		super();
		this.state = {
			description: '',
			price: '',
			image: ''
		};
	}

	componentDidMount() {
		this.props.getUser();
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlePost = () => {
		const { image, description, price } = this.state;
		this.props.postPcCompleted(image, description, price);
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
			// <div>
			// 	<input onChange={this.handleFileUpload} type="file" />
			// 	<textarea name="description" onChange={this.handleChange} />
			// 	<input name="price" onChange={this.handleChange} type="number" />
			// 	<button onClick={this.submitFile}>upload</button>
			// </div>
			<div className={styles.descForm}>
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
					{/* </div> */}
					<div className={styles.infoForm}>
						<span>Description</span>
						<textarea className={styles.textAreaInput} name="description" onChange={this.handleChange} />
						<span>Price</span>
						<input className={styles.priceInput} type="number" name="price" onChange={this.handleChange} />
						<Link to="/pccompleted">
							<button className={styles.saveBtn} onClick={this.handlePost}>
								Post
							</button>
						</Link>
					</div>
				</form>

				<div className={styles.uploadForm}>
					<img className={styles.uploadImg} src={this.state.image} />
				</div>
				{/*
					<div className={styles.description}>
						<p>
							Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals,
							of the family Felidae. Domestic cats are often called house cats when kept as indoor pets.
							Cats have been domesticated (tamed) for nearly 10,000 years. They are one of the most
							popular pets in the world.
						</p>
					</div>
					<div className={styles.price}>
						<p>Price: $200</p>

						<button className={styles.post}>POST</button>
					</div> */}
				{/* <div className={styles.postFormBtn}> */}

				{/* </div> */}
				{/* </div> */}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		image: state.users.image,
		description: state.users.description,
		price: state.users.price
	};
};

export default connect(mapStateToProps, { getUser, postPcCompleted })(BtnPcCompleted);
