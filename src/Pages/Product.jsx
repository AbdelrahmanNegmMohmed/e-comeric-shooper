import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BridCrams from '../Components/Bridcrums/BridCrams';
import BroductDisplay from '../Components/broductdisplay/BroductDisplay';
import DiscribtionBox from '../Components/DiscribtionBox/DiscribtionBox';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const{productId}=useParams()
  const product =all_product.find((e)=>e.id === Number(productId))

  
  return (
    <div>
        <BridCrams product={product}/>
        <BroductDisplay product={product}/>
        <DiscribtionBox/>
    </div>
  )
}

export default Product