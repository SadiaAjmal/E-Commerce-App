import React from 'react'
import arrow_icon from '../../src/assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

    const {product} = props;

  return (
    <div className=' md:px-20 px-10 mt-24 '>

        <div className='flex flex-wrap gap-2 items-center'>
            Home <img src={arrow_icon} className=' w-2 h-3'/> Shop <img src={arrow_icon} className=' w-2 h-3'/> {product.category} <img src={arrow_icon} className=' w-2 h-3'/>{product.name}
        </div>

    </div>
  )
}

export default Breadcrum
