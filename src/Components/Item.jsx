import React from 'react'
import Product from '../Pages/Product'
import {Link} from 'react-router-dom'

function Item(props) {
  return (
    <div className='w-[250px] mt-10 hover:scale-105 duration-75 '>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
        <p className=' my-1 mx-0 text-[18px] p-3'>{props.name}</p>

        <div className=' flex gap-5 p-3'>
            <div className=' text-gray-700 text-xl font-semibold'>
                ${props.new_price}
            </div>
            <div className=' text-gray-700 text-xl line-through mb-5'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item