import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../../src/assets/cart_cross_icon.png'



const CartItems = () => {

const {all_product, getTotalAmount, cartItems, removeFromCart} =useContext(ShopContext);





return (
    <div className='mt-24 md:px-20 px-10'>


        <div className=' lg:block hidden'>
            <div className='grid grid-cols-custom gap-[75px] items-center font-medium text-[18px] py-5'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className=' h-[2px] w-full' />

            {all_product.map((e)=>{
              if(cartItems[e.id]>0){
                return  <div key={e.id}>
                            <div className='grid grid-cols-custom gap-[75px] items-center font-medium text-[18px] py-5 '>

                                <img src={e.image} className=''/>        
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>

                                <button className='border w-8'>{cartItems[e.id]}</button>
    
                                <p>${e.new_price*cartItems[e.id]}</p> 
                                <img onClick={()=>removeFromCart(e.id)} src={remove_icon} className=' bg-slate-50 hover:bg-slate-100 cursor-pointer p-2 rounded-full' />
                            

                            </div>

                            <hr className=' h-[2px] w-full' />

                        </div>
              }
              return null;
            })}
        </div>



        {/*___________________________Responsive CartItems_________________________________*/} 

        <div className='lg:hidden'>
            {all_product.map((e)=>{
              if(cartItems[e.id]>0){
                return  <div key={e.id}>
                            <div className='flex flex-col justify-center gap-5 py-2'>
                                <div className=' flex flex-row justify-between items-center'>
                                    <p className='text-[18px] font-medium'>Product</p>
                                    <img src={e.image} className=' w-28'/>
                                </div>
                                <hr className=' h-[2px] w-full' />
                                <div className=' flex  flex-row justify-between items-center'>
                                    <p className='text-[18px] font-medium pr-[50%]'>Title</p>
                                    <p>{e.name}</p>
                                </div>

                                <hr className=' h-[2px] w-full' />

                                <div className=' flex flex-row justify-between items-center'>
                                    <p className='text-[18px] font-medium'>Price</p>
                                    <p>${e.new_price}</p>
                                </div>

                                <hr className=' h-[2px] w-full' />

                                <div className=' flex flex-row justify-between items-center'>
                                    <p className='text-[18px] font-medium'>Quantity</p>
                                    <button className='border w-8'>{cartItems[e.id]}</button>
                                </div>

                                <hr className=' h-[2px] w-full' />

                                <div className=' flex flex-row justify-between items-center'>
                                    <p className='text-[18px] font-medium'>Total</p>    
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                </div>

                                <hr className=' h-[2px] w-full' />

                                <div className=' flex flex-row justify-between items-center mb-20'>
                                    <p className='text-[18px] font-medium'>Remove</p>
                                    <img onClick={()=>removeFromCart(e.id)} src={remove_icon} className=' bg-slate-50 hover:bg-slate-100 cursor-pointer p-2 rounded-full' />
                                </div>

                            </div>


                        </div>
              }
              return null;
            })}
        </div>



        <div className='md:flex items-center justify-between mt-20 space-y-8 gap-24'>

            <div className=' flex-1 flex flex-col'>
                <div className=' my-5'>
                    <p className=' font-semibold'>Cart Totals</p>
                </div>

                <div className=' flex justify-between my-3'>
                    <p>Subtotals</p>
                    <p>${getTotalAmount()}</p>
                </div>

                <hr className=' h-[2px] w-full' />

                <div className=' flex justify-between my-4'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>

                <hr className=' h-[2px] w-full' />

                <div className=' flex justify-between my-4 font-semibold'>
                    <p className=' '>Totals</p>
                    <p>${getTotalAmount()}</p>
                </div>

                <div>
                    <button className=' bg-red-600 hover:bg-red-700 cursor-pointer text-white px-5 py-2 rounded-md'>Proceed to checkout</button>
                </div>
            </div>

            <div className=' flex-1 space-y-3'>
                <p>If you have a promo code  Enter here</p>
                <input type="text" className=' w-full md:w-auto px-3 py-2 bg-slate-200 border-none outline-none mt-5'/>
                <button className=' bg-slate-700 hover:bg-slate-800 text-white px-5 py-2'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems;


//const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

/*
    const [cart, setCart] = useState(()=>{
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cart));
    },[cart]);
 */