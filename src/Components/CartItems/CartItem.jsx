import React from 'react'
import './CartItem.css'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {

    const {getTotalCartAmount,all_product, cartItem, addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart-item'>
        <div className="cartitem-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItem[e.id] > 0){
                return <div>
                            <div className="cartitem-format cartitem-main">
                                <img src={e.image} alt=""className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price*cartItem[e.id]}</p>
                                <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr/>
                        </div>
            }
            return null;    
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Carts Total</h1>
                <div>
                    <div className="cartitem-totalitem">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitem-totalitem">
                        <p>Shipping Fee</p>
                        <p>Fee</p>     
                    </div>
                    <hr/>
                    <div className="cartitem-totalitem">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3> 
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='Enter Promo Code' />
                    <button>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem