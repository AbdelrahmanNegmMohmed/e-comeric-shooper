import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItem = () => {
    const {all_product,CartItem,removefromcart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
      {all_product.map((ltem)=>{
        if(CartItem[ltem.id]>0)        
        return<div>
        <div className="cartitems-format">
            <img src={ltem.image} alt="" className='carticon-product-icon' />
            <p>{ltem.name}</p>
            <p>{ltem.new_price}</p>
            <button className='cartitem-contity'>{CartItem[ltem.id]}</button>
            <p>{ltem.new_price*CartItem[ltem.id]}</p>
            <img src={remove_icon} onClick={()=>{removefromcart(ltem.id)}} alt="" />
        </div>
        <hr />
    </div>
      })}
    </div>
  )
}

export default CartItem