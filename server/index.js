require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const path = require('path'); // Usually moved to the start of file

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const { register, login, logout, getUser } = require('./controller/authController');
// const { loginAdmin, registerAdmin } = require('./controller/authAdminController');
// import axios from "axios"

const {
	getCpu,
	getCpuCooler,
	getMotherboard,
	getMemory,
	getStorage,
	getVideoCard,
	getCase,
	getPowerSupply,
	getMonitor,
	getCart,
	addCart,
	deleteItems,
	editProfile,
	getPcCompleted,
	postPcCompleted
} = require('./controller/psPartsController');
app.use(express.json());
app.use(cors());

massive(CONNECTION_STRING).then((db) => {
	app.set('db', db);
	console.log('db connected');
});

app.use(
	session({
		resave: true,
		saveUninitialized: false,
		secret: SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7
		}
	})
);

// DROPLETS
app.use(express.static(`${__dirname}/../build`));

app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/logout', logout);
app.get('/auth/getuser', getUser);
// app.post('/auth/loginadmin', loginAdmin);
// app.post('/auth/registeradmin', registerAdmin);

app.get('/api/cpu', getCpu);
app.get('/api/cpucooler', getCpuCooler);
app.get('/api/motherboard', getMotherboard);
app.get('/api/memory', getMemory);
app.get('/api/storage', getStorage);
app.get('/api/videocard', getVideoCard);
app.get('/api/case', getCase);
app.get('/api/powersupply', getPowerSupply);
app.get('/api/monitor', getMonitor);

app.get('/api/products', getCart);
app.get('/api/product', getPcCompleted);
app.post('/api/product', postPcCompleted);
app.post('/api/products', addCart);
app.delete('/api/products/:id', deleteItems);
app.put('/api/products', editProfile);

app.post('/api/checkout', async (req, res) => {
	let error;
	let status;
	console.log(req.session.user.cart);
	try {
		const { token, cart } = req.body;
		// const customer = await stripe.customers.create({
		// 	email: token.email,
		// 	source: token.id,
		// });
		const charge = await stripe.charges.create({
			amount: 301 * 100,
			currency: 'usd',
			receipt_email: token.email,
			source: token.id,
			description: 'The thing you bought',
			shipping: {
				name: token.card.name,
				address: {
					line1: token.card.address_line1,
					city: token.card.address_city,
					country: token.card.address_country,
					postal_code: token.card.address_zip
				}
			}
		});
		console.log(charge);

		console.log('charge', { charge });
		status = 'success';
	} catch (error) {
		console.error('error', error);
		status = 'failure';
	}

	res.json({ error, status });
});

// configure the keys for accessing AWS
AWS.config.update({
	accessKeyId: process.env.ACCESS_ID,
	secretAccessKey: process.env.SECRET_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
	const params = {
		ACL: 'public-read',
		Body: buffer,
		Bucket: process.env.BUCKET_S3,
		ContentType: type.mime,
		Key: `${name}.${type.ext}`
	};
	return s3.upload(params).promise();
};

// Define POST route
app.post('/test-upload', (request, response) => {
	const form = new multiparty.Form();
	form.parse(request, async (error, fields, files) => {
		if (error) throw new Error(error);
		try {
			const path = files.file[0].path;
			const buffer = fs.readFileSync(path);
			const type = fileType(buffer);
			const timestamp = Date.now().toString();
			const fileName = `bucketFolder/${timestamp}-lg`;
			const data = await uploadFile(buffer, fileName, type);
			return response.status(200).send(data);
		} catch (error) {
			console.log(error);
			return response.status(400).send(error);
		}
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => {
	console.log(`Listening on ${SERVER_PORT}`);
});
