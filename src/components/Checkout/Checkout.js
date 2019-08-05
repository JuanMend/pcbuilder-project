import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const fromDollarToCent = (amount) => amount * 100;

// const successPayment = data => {
//   window.location.assign(`${process.env.REACT_APP_PATH}/#/cart`)
// };

const onToken = (amount) => (token) =>
	axios
		.post(`/api/checkout`, {
			source: token.id,
			currency: CURRENCY,

			amount: fromDollarToCent(amount)
		})
		.then(() => {
			// successPayment();
			// toggleShow();
			console.log('payment went through');
		})
		.catch(() => {
			// successPayment();
			// toggleShow();
			console.log('payment failed');
		});

const Checkout = ({ name, amount }) => {
	return (
		<StripeCheckout
			name={name}
			amount={fromDollarToCent(amount)}
			token={onToken(amount)}
			currency={CURRENCY}
			stripeKey="pk_test_TKV642wQmuy9l9PF2zocAW0I00obBGU8vC"
		/>
	);
};

export default Checkout;
