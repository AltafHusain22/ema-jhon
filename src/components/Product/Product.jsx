import React from 'react';
import './Product.css'
const Product = (props) => {

	const {name ,price, img, seller, ratings} = props.product
	return (
	
			<div className='product-card'>
			   <img className='product-img' src={img} alt="" />
			   <div className='product-info'>
					<h6 className='product-name'>{name}</h6>
					<p> Price : $ {price}</p>
					<p>Manufacturer : {seller}</p>
					<p>Rating : {ratings} stars</p>
			   </div>
			   <button className='cart-btn'>Add to Cart</button>
		    </div>
	);
};

export default Product;