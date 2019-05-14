// const bcrypt = require('bcryptjs');

// const registerAdmin = async (req, res) => {
// 	const { username, password, admin } = req.body;
// 	const db = req.app.get('db');
// 	const getAdmin = await db.get_admin(username);
// 	if (getAdmin.length > 0) {
// 		res.status(403).json('Username taken');
// 	} else {
// 		const hash = await bcrypt.hash(password, 12);
// 		await db.register_admin([ username, hash, admin ]);
// 		req.session.user = { username, admin };
// 		res.status(200).json(req.session.user);
// 	}
// };

// const loginAdmin = async (req, res) => {
// 	const { username, password } = req.body;
// 	const db = req.app.get('db');
// 	const user = await db.get_admin(username);
// 	if (user.length > 0) {
// 		const foundAdmin = await bcrypt.compare(password, user[0].password);
// 		if (foundAdmin) {
// 			req.session.user = { username: user[0].username };
// 			res.status(200).json(req.session.user);
// 		} else {
// 			res.status(403).json('username or password incorrect');
// 		}
// 	} else {
// 		res.status(403).json('username dont exist');
// 	}
// };

// module.exports = {
// 	registerAdmin,
// 	loginAdmin
// };
