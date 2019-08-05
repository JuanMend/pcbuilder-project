const getCpu = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_cpu();
	res.status(200).json(result);
};

const getCpuCooler = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_cpu_cooler();
	res.status(200).json(result);
};

const getMotherboard = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_motherboard();
	res.status(200).json(result);
};

const getMemory = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_memory();
	res.status(200).json(result);
};

const getStorage = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_storage();
	res.status(200).json(result);
};

const getVideoCard = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_videocard();
	res.status(200).json(result);
};

const getCase = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_case();
	res.status(200).json(result);
};

const getPowerSupply = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_power_supply();
	res.status(200).json(result);
};

const getMonitor = async (req, res) => {
	const db = req.app.get('db');
	const result = await db.get_monitor();
	res.status(200).json(result);
};

const getPcCompleted = async (req, res) => {
	const db = req.app.get('db');
	console.log('result');
	const result = await db.get_pc_completed();
	res.status(200).json(result);
};

const postPcCompleted = async (req, res) => {
	console.log(req.body);
	const db = req.app.get('db');
	const { image, description, price } = req.body;
	const result = await db.post_pc_completed([ image, description, price ]);
	res.status(200).json(result);
};

const addCart = (req, res) => {
	const {
		id,
		cpu,
		cores,
		cpu_cooler,
		fan_rpm,
		cases,
		type,
		memory,
		speed,
		motherboard,
		socket_cpu,
		storage,
		capacity,
		power_supply,
		form_factor,
		video_card,
		memory_size,
		monitor,
		resolution,
		size,
		price,
		image
	} = req.body;
	console.log(req.body);
	req.session.user.cart.push({
		id,
		cpu,
		cores,
		cpu_cooler,
		fan_rpm,
		cases,
		type,
		memory,
		speed,
		motherboard,
		socket_cpu,
		storage,
		capacity,
		power_supply,
		form_factor,
		video_card,
		memory_size,
		monitor,
		resolution,
		size,
		price,
		image
	});
	console.log(req.session.user.cart);
	res.status(200).json(req.session.user.cart);
};

const getCart = async (req, res) => {
	res.status(200).json(req.session.user.cart);
};

const clearCart = (req, res) => {
	req.session.cart = [];
	res.status(200).json(req.session.cart);
};

const deleteItems = (req, res) => {
	const index = req.session.user.cart.findIndex((val) => val.id === +req.params.id);
	console.log(index);
	req.session.user.cart.splice(index, 1);
	res.json(req.session.user.cart);
};

const editProfile = async (req, res) => {
	console.log('hit');
	const db = req.app.get('db');
	const { image } = req.body;

	db.edit_item([ req.session.user.username, image ]);
	req.session.user.image = image;
	console.log(req.session.user);
	res.status(200).json(req.session.user);
};

module.exports = {
	getCpu,
	getCpuCooler,
	getMotherboard,
	getMemory,
	getStorage,
	getVideoCard,
	getCase,
	getPowerSupply,
	getMonitor,
	addCart,
	getCart,
	deleteItems,
	editProfile,
	getPcCompleted,
	postPcCompleted,
	clearCart
};
