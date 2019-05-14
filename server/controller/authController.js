const bcrypt = require('bcryptjs');

const register = async (req, res) => {
	console.log(req.body);
	const { username, password, image } = req.body;
	const db = req.app.get('db');
	const user = await db.get_user(username).catch((error) => console.log(error));
	if (user.length > 0) {
		res.status(403).json('Username taken');
	} else {
		const hash = await bcrypt.hash(password, 12);
		await db.register_user(username, hash, image);
		req.session.user = { username, image, cart: [] };
		res.status(200).json(req.session.user);
	}
};

const login = async (req, res) => {
	console.log(req.body);
	const { username, password, image } = req.body;
	const db = req.app.get('db');
	const user = await db.get_user(username);
	if (user.length > 0) {
		const userMatch = await bcrypt.compare(password, user[0].password);
		if (userMatch) {
			req.session.user = {
				username: user[0].username,
				image: user[0].image,
				cart: []
			};
			res.status(200).json(req.session.user);
		} else {
			res.status(403).json('username or password incorrect');
		}
	} else {
		res.status(403).json('username does not exist');
	}
};

const logout = (req, res) => {
	req.session.destroy();
	res.sendStatus(200);

	// res.status(200).json(req.session.user);
};

const getUser = (req, res, next) => {
	console.log(req.session.user);
	const { session } = req;
	if (!session.user) {
		session.user = { username: '', image: '', cart: [] };
	}
	res.json(session.user);
	next();
};

module.exports = {
	register,
	login,
	logout,
	getUser
};
