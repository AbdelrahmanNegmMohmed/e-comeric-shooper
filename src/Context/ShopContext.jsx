import "./ShopContext.css"
import  React,{createContext, useState}from "react"
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null)
const getDefultcart =()=>{
    let cart ={}
    for(let index=0; index< all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider =(props)=>{
    const [cartItem,setcartitem]=useState(getDefultcart())
    

    const  addcart =(itemId)=>{
        setcartitem((prev)=>({
            ...prev,
            [itemId]:prev[itemId]+1
        }))
        console.log(cartItem,"card details");
    }
    const  removefromcart =(itemId)=>{
        setcartitem((prev)=>({
            ...prev,
            [itemId]:prev[itemId]-1
        }))
    }
const constextvalue={all_product,cartItem,addcart,removefromcart}
    return(
        <ShopContext.Provider value={constextvalue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;