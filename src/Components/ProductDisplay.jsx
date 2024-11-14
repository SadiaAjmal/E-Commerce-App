import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)

  return (
    <div className=' md:px-20 px-3 mt-5 lg:flex justify-between items-center space-y-10'>
        <div className='flex flex-row gap-6 basis-[43%] justify-center items-center'>
            <div className=' flex flex-col gap-3 md:gap-5 justify-center'>
                <img src={product.image} alt="Product Image" className=' w-20 md:w-24 lg:w-36' />
                <img src={product.image} alt="Product Image" className=' w-20 md:w-24 lg:w-36' />
                <img src={product.image} alt="Product Image" className=' w-20 md:w-24 lg:w-36' />
                <img src={product.image} alt="Product Image" className=' w-20 md:w-24 lg:w-36' />
            </div>

            <div>
                <img src={product.image} alt="Product Image" className=' lg:w-[586px] h-[350px] md:h-[510px] hover:scale-105 duration-75' />
            </div>

        </div>



        <div className=' basis-[48%]'>
            <p className=' text-3xl md:text-5xl'>{product.name}</p>
            <div className=' flex gap-8 my-5'>
                <div className=' font-semibold text-red-600'>${product.new_price}</div>
                <div className=' line-through'>${product.old_price}</div>

            </div>

            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam inventore corporis sunt ab hic deleniti quasi quae iste, mollitia quidem.</p>
            </div>

            <p className=' text-3xl font-semibold mt-5'>Select Size</p>
            <div className=' flex gap-2 md:gap-5 mt-3'>
                <div className=' border cursor-pointer px-4 py-1 bg-gray-50 hover:bg-gray-100'>S</div>
                <div className=' border cursor-pointer px-4 py-1 bg-gray-50 hover:bg-gray-100'>M</div>
                <div className=' border cursor-pointer px-4 py-1 bg-gray-50 hover:bg-gray-100'>L</div>
                <div className=' border cursor-pointer px-4 py-1 bg-gray-50 hover:bg-gray-100'>XL</div>
                <div className=' border cursor-pointer px-4 py-1 bg-gray-50 hover:bg-gray-100'>XXL</div>
            </div>

            <div className=' my-7'>
                <button onClick={()=>{addToCart(product.id)}} className=' text-white hover:bg-red-700 px-5 py-2 rounded-lg bg-red-600'>Add to cart</button>
            </div>

            <p><span className=' font-semibold'>Category: </span>{product.category} ,T-Shirt , Crop Top</p>
            <p><span className=' font-semibold'>Tags:</span> Modern , Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay
