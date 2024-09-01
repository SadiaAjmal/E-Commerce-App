import React, { useState } from 'react'

import whatsapp from '../../src/assets/whatsapp_icon.png'
import insta from '../../src/assets/instagram_icon.png'
import pinterest from '../../src/assets/pintester_icon.png'
import { Link } from 'react-router-dom'
import SignUp from '../../src/Pages/SignUp'




function Login() {


  return (
    <div className="  grid place-items-center mt-24">

    <form action="" className=' bg-white w-11/12 max-w-md rounded-lg p-10 shadow-lg shadow-black/30'>

        <div className=' grid place-items-center'>
               <p className=' text-3xl font-semibold mx-5 tracking-wide'>LOGIN</p>
        </div>

        <div className=' mx-5 my-2'>
            <p className=' mb-2 text-xl'>Email:</p>
            <input className=' h-8 outline-none w-full rounded-sm p-5 bg-slate-50' type="email" placeholder='Email ID' required />
        </div>


        <div className=' mx-5 my-2'>
            <p className=' mb-2 text-xl'>Password:</p>
            <div className=' flex bg-slate-50'>
            <input className='h-8 outline-none w-full rounded-sm p-5 bg-slate-50' type="password" placeholder='Password' required maxLength={15} minLength={8} />
            
            </div>
        </div>

        <div className=' mx-5 my-2 flex gap-5 items-center justify-center'>
            <input type="checkbox" className=' cursor-pointer'/>
            <p>Remember Me</p>
        </div>

        <div className=' mx-5 my-2 flex items-center justify-center'>
            <button className=' bg-red-500 text-xl text-white w-full rounded-full py-2  hover:bg-red-600 cursor-pointer tracking-wide'>LOGIN</button>
        </div>

        <div className=' mx-5 my-2 flex justify-end'>
            <p className=' cursor-pointer'> Forgot Password? </p>
        </div>


        <div className=' mx-5 my-2 flex flex-col justify-center items-center'>
            <div>
                <p className=' font-semibold'>  OR </p>
            </div>
            <div>
                <p>LogIn with</p>
            </div> 

        </div>


        <div className=' mx-5 flex justify-center gap-8 mb-3'>
            <img src={whatsapp} alt="" className=' h-7 cursor-pointer'/>
            <img src={insta} alt="" className=' h-7 cursor-pointer'/>
            <img src={pinterest} alt="" className=' h-7 cursor-pointer'/>

        </div>

        <div className=' mx-5 my-2 flex justify-center'>
            <p>Need an Account?  <span className='font-semibold text-red-500'><Link to='/signUp' element={<SignUp/>} >SignUp</Link></span></p>
        </div>

    </form>
    </div>
  )
}

export default Login;

