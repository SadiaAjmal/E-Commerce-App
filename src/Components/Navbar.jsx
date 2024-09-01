import React  from 'react'
import { useState } from 'react';
import { IoMenuOutline , IoClose} from "react-icons/io5";
import { Link ,NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import cartIcon from '../../src/assets/cart_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';



function Navbar() {

    const[toggle,setToggle]=useState(false);
    const {getTotalCartItems} = useContext(ShopContext);

    const menu=(()=>{
            setToggle(!toggle);
        })

    return (
        <div>

       <nav className='bg-white md:px-20 px-5 py-3 flex justify-between shadow-lg fixed top-0 z-10 w-full'>


        <div className='flex items-center gap-2'>

            <div className=' md:mr-5 block place-content-center text-black cursor-pointer md:hidden'>

                {
                    toggle ?

                        <IoClose onClick={menu} className=' bg-slate-50 p-1 rounded-full h-8 w-8'  />
                    
                        :

                        <IoMenuOutline onClick={menu} className=' bg-slate-50 h-8 w-8 p-1 rounded-full' />

                }
            </div>


                <div>
                    <Link to='/' className=' flex items-center justify-center gap-3'>
                        <img src={logo} alt=""  className=' w-10'/>
                        <p className=' font-bold text-2xl'>SHOPPER</p>
                    </Link>
                </div>
        </div>
        
        <div className=' flex items-center '>
            <ul className='md:flex gap-6 items-center justify-center hidden'>

                <li className=' cursor-pointer hover:border-b-2 py-1 border-gray-700 text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})} to="/">Shop</NavLink></li>
                <li className=' cursor-pointer hover:border-b-2 py-1 border-gray-700 text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/men'>Men</NavLink></li>
                <li className=' cursor-pointer hover:border-b-2 py-1 border-gray-700 text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/women'>Women</NavLink></li>
                <li className=' cursor-pointer hover:border-b-2 py-1 border-gray-700 text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/kids'>Kids</NavLink></li>
            </ul> 
        </div>


        <div className=' flex flex-row items-center h-14 gap-14'>
            <NavLink style={({isActive}) => ({background:isActive ? 'black' : '',color:isActive ? 'white':'', borderRadius:isActive ? '9999px':'', border:isActive ? 'none' : ''})} to='/login'><button className='md:flex hidden border-2 border-stone-800 px-8 py-1 cursor-pointer rounded-full'>Login</button></NavLink>
            <Link to='/cart'><img src={cartIcon} alt="" className=' h-8 mr-0 cursor-pointer' /></Link>
                <div className=' w-4 h-4 p-[10px] flex justify-center items-center cursor-pointer bg-red-500 text-white rounded-full mt-[-22px] ml-[-65px]'>
                {getTotalCartItems()}
                </div>
        </div>



        {/*___________________________Responsive Menu_________________________________*/} 



        <ul className={` h-screen duration-300 md:hidden space-y-8 w-[60%] shadow-lg p-5 mt-16 fixed bg-white ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
            <li className='cursor-pointer text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})} to="/">Shop</NavLink></li>
            <li className='cursor-pointer text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/men'>Men</NavLink></li>
            <li className='cursor-pointer  text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/women'>Women</NavLink></li>
            <li className='cursor-pointer  text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/kids'>Kids</NavLink></li>
            <li className='cursor-pointer  text-gray-700 '> <NavLink style={({isActive}) => ({fontWeight:isActive ? 'bold' : ''})}  to='/login'>LogIn</NavLink></li>
        </ul>





    </nav>
                
            
        </div> 
  )
}


export default Navbar



