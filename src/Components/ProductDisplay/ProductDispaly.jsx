import React, { useContext } from 'react'
import './ProductDispaly.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDispaly = (props) => {

    const { product } = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-description">
                <p>A lightweight, usually knitted, pullover shirt, close-fitting</p>
            </div>
            <div className="productdisplay-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>    
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdispaly-category">
                <span>Category:</span> {product.category}
            </p>
            <p className="productdispaly-category">
                <span>Tags:</span> Modern , Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDispaly