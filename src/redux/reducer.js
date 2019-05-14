import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const initialState = {
	username: '',
	password: '',
	image: '',
	showLogin: false,
	redirect: false,
	cart: []
};

const UPDATE_USER = 'UPDATE_USER';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADMIN_LOGIN = ' ADMIN_LOGIN ';
const GET_USER = 'GET_USER';
const EDIT_PROFILE = 'EDIT_PROFILE';
// export function updateUser(user) {
// 	return {
// 		type: UPDATE_USER,
// 		payload: user
// 	};
// }

export function updateProfile(image) {
	return {
		type: EDIT_PROFILE,
		payload: axios.put(`/api/products`, { image }).then((res) => res.data)
	};
}

export function getUser() {
	return {
		type: GET_USER,
		payload: axios.get('/auth/getuser').then((res) => res.data)
	};
}

export function adminLogin(username, password) {
	return {
		type: ADMIN_LOGIN,
		payload: axios.post('/auth/loginadmin', { username, password })
	};
}

export function register(username, password, image) {
	return {
		type: REGISTER,
		payload: axios.post('/auth/register', { username, password, image })
		// this.props.updateUser(user.data);
	};
}

export function updateLogin(username, password, image) {
	console.log('hit');
	return {
		type: LOGIN,
		payload: axios.post('/auth/login', { username, password, image })
		// .then((res) => res.data)
		// // toast.success('Your Login')

		// .catch((err) => {
		// 	toast.error('Username or Password Incorrect');
		// })
	};
}

export function logOut() {
	return {
		type: LOGOUT,
		payload: axios.get('/auth/logout')
	};
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;
	// console.log(action);
	switch (type) {
		// case UPDATE_USER:
		// 	return { ...state, user: payload };
		case `${LOGIN}_FULFILLED`:
			console.log(action.payload.data.username);
			return {
				...state,
				username: payload.data.username[0],
				image: payload.data.image, //??
				showLogin: true,
				redirect: true
			};
		case `${LOGOUT}_FULFILLED`:
			return {
				...state,
				username: '',
				password: '',
				showLogin: false,
				redirect: false
			};
		case `${ADMIN_LOGIN}_FULFILLED`:
			return {
				...state,
				showLogin: true,
				username: payload.data.username[0],
				redirect: true
			};
		case `${REGISTER}_FULFILLED`:
			return {
				...state,
				username: payload.data.username[0],
				image: payload.data.image, //??
				showLogin: true,
				redirect: true
			};
		case `${GET_USER}_FULFILLED`:
			return {
				...state,
				username: payload.username,
				image: payload.image,
				cart: payload.cart
			};
		case `${EDIT_PROFILE}_FULFILLED`:
			// console.log(action.payload.data.image);
			return {
				...state,
				image: payload.image
			};
		default:
			return state;
	}
}
