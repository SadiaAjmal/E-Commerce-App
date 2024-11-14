import React from 'react'
import data_product from '../../src/assets/data'
import Item from '../../src/Components/Item'

function Popular() {
  return (
    <div className=' flex flex-col items-center gap-3 px-3 md:px-20 my-10'>
        <h1 className=' text-2xl md:text-4xl font-semibold mt-5 tracking-wide'>POPULAR IN WOMEN</h1>
        <hr className=' w-36 md:w-48 h-[6px] rounded-lg bg-slate-700' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular
