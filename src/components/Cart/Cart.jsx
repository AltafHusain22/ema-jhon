import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const {cart} = props 
	
	let total = 0
	let totalShipping = 0
	let tax = 0 
	let grandTotal = 0
	for (const product of cart){
			total = total + product.price
			totalShipping = totalShipping + product.shipping 
			tax = total * 5 / 100
			grandTotal = total + tax + totalShipping	
	   }


	return (
		
			<div  className='cart'>
				<h2 className='cart-heading'>Order Summury</h2>
				<p> Selected Items : {cart.length} </p>
				<p> Total Price : ${total} </p>
				<p> Total Shipping : ${totalShipping}</p>
				<p> Tax : ${tax} </p>
				<h4>Grand Total : ${grandTotal} </h4>
			</div>

	    );
};

export default Cart;