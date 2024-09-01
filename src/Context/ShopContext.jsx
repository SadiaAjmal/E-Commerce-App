import React, { createContext } from "react";
import all_product from '../../src/assets/all_product'
import { useState ,useEffect } from "react";
import Product from "../Pages/Product";


export const ShopContext =createContext(null);

const getDefaultCart = ()=>{
    let cart={};
    for(let index=0; index < all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

 /*
  useEffect(() => {

    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems && storedCartItems !== '') {

      try {

        setCartItems(JSON.parse(storedCartItems));

      } catch (error) {

        console.error('Error parsing stored cart items:', error);

        setCartItems(getDefaultCart()); // Set to default cart instead of empty object

      }

    } else {

      setCartItems(getDefaultCart()); // Set to default cart instead of empty object

    }

  }, []);


  useEffect(() => {

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems]);
 */

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const getTotalAmount = () => {
        let totalAmount =  0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((Product) => Product.id === Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }  
        } 
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems=0;
        for( const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItems+=cartItems[item];
            }
        }
        return totalItems;
    }


    const contextValue ={getTotalCartItems,getTotalAmount,all_product,cartItems,addToCart,removeFromCart};


    return ( 
        <ShopContext.Provider value = {contextValue}>
            {props.children} 
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;