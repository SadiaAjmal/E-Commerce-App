import React from 'react'
import img from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='md:px-28 px-10 mb-10'>

        <div className=' bg-custom-gradient md:px-28 p-12 lg:flex items-center lg:justify-between'>

            <div className=' space-y-2 mb-5 flex flex-col justify-center items-center'>
                <h1 className='  font-semibold'>Exclusive</h1>
                <h1 className='  font-semibold'>Offers For You</h1>
                <p className=' font-semibold mb-5'>ONLY ON BEST SELLER PRODUCTS</p>
                <button className=' justify-self-center gap-3 bg-red-500 text-white md:px-10 px-3 py-2 rounded-full hover:bg-red-600 cursor-pointer font-semibold border-none'>Check Now</button>
            </div>

            <div className='flex justify-center'>
                <img src={img} alt="" className=' w-64' />
            </div>

        </div>

    </div>
  )
}

export default Offers
