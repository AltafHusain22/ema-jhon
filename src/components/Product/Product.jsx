import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

	const handleAddToCart = props.handleAddToCart
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
			   <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'> Add to Cart  <FontAwesomeIcon icon={ faShoppingCart } /></button>
		    </div>
	);
};

export default Product;