import React from 'react'
import logo from '../../src/assets/logo.png'
import whatsapp from '../assets/whatsapp_icon.png'
import pinterest from '../assets/pintester_icon.png'
import insta from '../assets/instagram_icon.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='md:px-20 px-3 my-5 mt-20 flex flex-col justify-center items-center gap-8'>
        <div className=' flex items-center justify-center gap-3'>
            <img src={logo} alt="" className=' w-10' />
            <p className=' font-semibold'>SHOPPER</p>
        </div>

        <div>
            <ul className=' flex flex-wrap items-center justify-center gap-5'>
                <li className=' cursor-pointer hover:scale-105 duration-75'>Company</li>
                <li className=' cursor-pointer hover:scale-105 duration-75'>Products</li>
                <li className=' cursor-pointer hover:scale-105 duration-75'>Office</li>
                <li className=' cursor-pointer hover:scale-105 duration-75'>About</li>
                <li className=' cursor-pointer hover:scale-105 duration-75'>Contact</li>
            </ul>
        </div>

        <div className=' flex justify-center gap-10 mb-5'>
            <img src={insta}  className=' cursor-pointer hover:scale-105 duration-75' />
            <img src={whatsapp}  className=' cursor-pointer hover:scale-105 duration-75' />
            <img src={pinterest} className=' cursor-pointer hover:scale-105 duration-75'  />
        </div>

        <hr className=' h-[2px] w-full bg-gray-600 rounded-full' />
        
        <div className=' text-center md:flex items-center justify-center'>
            <p>CopyRight &copy; {currentYear}. </p>
            <p> All rights are reserved.</p>
        </div>

    </div>
  )
}

export default Footer
