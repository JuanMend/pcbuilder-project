import axios from 'axios';

const initialState = {
	cpu: [],
	cpuCooler: [],
	motherboard: [],
	memory: [],
	storage: [],
	videoCard: [],
	case: [],
	powerSupply: [],
	monitor: [],
	cart: [],
	pcCompleted: [],
	cartTotal: 0,
	image: '',
	description: '',
	price: ''
	// image: ''
};

// const UPDATE_PC_COMPLETED = 'UPDATE_PC_COMPLETED';
const GET_CPU = 'GET_CPU';
const GET_CPU_COOLER = 'GET_CPU_COOLER';
const GET_MOTHERBOARD = 'MOTHERBOARD';
const GET_MEMORY = 'MEMORY';
const GET_STORAGE = 'GET_STORAGE';
const GET_VIDEO_CARD = 'GET_VIDEO_CARD';
const GET_CASE = 'GET_CASE';
const GET_POWER_SUPPLY = 'GET_POWER_SUPPLY';
const GET_MONITOR = 'GET_MONITOR';
const GET_CART = 'GET_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const GET_PC_COMPLETED = 'GET_PC_COMPLETED';
const POST_PC_COMPLETED = 'POST_PC_COMPLETED';
const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';
const CLEAR_CART = 'CLEAR_CART';

export function clearCart() {
	axios('api/clearcart');
	return {
		type: CLEAR_CART,
		payload: []
	};
}

export function updateCartTotal(total) {
	return {
		type: UPDATE_CART_TOTAL,
		payload: total
	};
}

export function getPcCompleted() {
	return {
		type: GET_PC_COMPLETED,
		payload: axios.get('/api/product')
	};
}

export function postPcCompleted(image, description, price) {
	return {
		type: POST_PC_COMPLETED,
		payload: axios.post('/api/product', { image, description, price })
	};
}

export function deleteItem(id) {
	console.log(id);
	return {
		type: DELETE_ITEM,
		payload: axios.delete(`/api/products/${id}`)
	};
}

export function getCart() {
	return {
		type: GET_CART,
		payload: axios.get('/api/products')
	};
}

export function addCart(val) {
	return {
		type: UPDATE_CART,
		payload: axios.post('/api/products', val)
	};
}

export function cpuPart() {
	return {
		type: GET_CPU,
		payload: axios.get('/api/cpu')
	};
}

export function cpuCoolerPart() {
	return {
		type: GET_CPU_COOLER,
		payload: axios.get('/api/cpucooler')
	};
}

export function motherboardPart() {
	return {
		type: GET_MOTHERBOARD,
		payload: axios.get('/api/motherboard')
	};
}

export function memoryPart() {
	return {
		type: GET_MEMORY,
		payload: axios.get('/api/memory')
	};
}

export function storagePart() {
	return {
		type: GET_STORAGE,
		payload: axios.get('/api/storage')
	};
}

export function videoCardPart() {
	return {
		type: GET_VIDEO_CARD,
		payload: axios.get('/api/videocard')
	};
}

export function casePart() {
	return {
		type: GET_CASE,
		payload: axios.get('/api/case')
	};
}

export function powerSupplyPart() {
	return {
		type: GET_POWER_SUPPLY,
		payload: axios.get('/api/powersupply')
	};
}

export function monitorPart() {
	return {
		type: GET_MONITOR,
		payload: axios.get('/api/monitor')
	};
}

export default function users(state = initialState, action) {
	const { type, payload } = action;
	console.log(action);
	switch (type) {
		case `${GET_CPU}_FULFILLED`:
			return {
				...state,
				cpu: [ ...payload.data ]
			};

		case `${GET_CPU_COOLER}_FULFILLED`:
			return {
				...state,
				cpuCooler: [ ...payload.data ]
			};

		case `${GET_MOTHERBOARD}_FULFILLED`:
			return {
				...state,
				motherboard: [ ...payload.data ]
			};
		case `${GET_MEMORY}_FULFILLED`:
			return {
				...state,
				memory: [ ...payload.data ]
			};

		case `${GET_STORAGE}_FULFILLED`:
			return {
				...state,
				storage: [ ...payload.data ]
			};

		case `${GET_VIDEO_CARD}_FULFILLED`:
			return {
				...state,
				videoCard: [ ...payload.data ]
			};

		case `${GET_CASE}_FULFILLED`:
			return {
				...state,
				case: [ ...payload.data ]
			};

		case `${GET_POWER_SUPPLY}_FULFILLED`:
			return {
				...state,
				powerSupply: [ ...payload.data ]
			};

		case `${GET_MONITOR}_FULFILLED`:
			return {
				...state,
				monitor: [ ...payload.data ]
			};

		case `${GET_CART}_FULFILLED`:
			return {
				...state,
				cart: [ ...payload.data ]
			};
		case `${UPDATE_CART}_FULFILLED`:
			return {
				...state,
				cart: [ ...payload.data ]
			};
		case `${DELETE_ITEM}_FULFILLED`:
			return {
				...state,
				cart: payload.data
			};
		case `${GET_PC_COMPLETED}_FULFILLED`:
			console.log(action.payload.pcCompleted);
			return {
				...state,
				pcCompleted: [ ...payload.data ]
			};
		case `${POST_PC_COMPLETED}_FULFILLED`:
			return {
				...state,
				pcCompleted: [ ...payload.data ],
				image: payload.data[0].image,
				description: payload.data[0].description,
				price: payload.data[0].price
			};

		case UPDATE_CART_TOTAL:
			return {
				...state,
				cartTotal: payload
			};

		case CLEAR_CART: {
			return {
				...state,
				cart: payload
			};
		}

		default:
			return state;
	}
}
