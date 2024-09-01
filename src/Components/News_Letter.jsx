import React from 'react'

const News_Letter = () => {
  return (
    <div className=' md:px-28 px-10 mt-20'>

        <div className=' py-10 pt-20 bg-custom-gradient p-10 flex flex-col items-center justify-center space-y-7'>
            <h1 className=' font-semibold'>Get Exclusive Offers On Your Email </h1>
            <p className=' text-xl'>Sunscribe to our news letter and stay updated</p>
            <input type="email" name="Email" placeholder='Enter your Email Here' required className='lg:w-[500px] w-full h-12 px-2 py-1 border-none text-base tracking-wider rounded-lg bg-[#e8e5e5] shadow-lg shadow-[#fff] shadow-opacity-60 bg-gradient-to-r from-white via-[#fcfcfc10] to-white bg-[length:200%_200%] animate-[input_4s_infinite] outline-none'/>
            <button className=' px-10 p-3 bg-stone-700 text-white text-xl rounded-full'>Subscribe</button>

        </div>

    </div>
  )
}

export default News_Letter


//bg-white shadow-lg box-border hover:ease-in-out md:w-[500px] p-3 outline-none border-none mb-10 mt-1 rounded-md