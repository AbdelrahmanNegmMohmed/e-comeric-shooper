import React from 'react'
import "./Bridcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"


const BridCrams = (props) => {
    const {product}=props;
    console.log(product);
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon}alt="" />SHOP <img src={arrow_icon} alt=""/>{product.category}<img src={arrow_icon} alt="" />{product.name} 
    </div>
  )
}

export default BridCrams