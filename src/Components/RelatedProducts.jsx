import React from 'react'
import all_products from '../../src/assets/all_product'
import Item from './Item'


const RelatedProducts = () => {



  return (
    <div className=' mt-20 flex flex-col items-center gap-3 px-3 md:px-20'>
        <h1 className=' text-2xl md:text-4xl font-semibold mt-5 tracking-wide'>RELATED PRODUCTS</h1>
        <hr className=' w-36 md:w-48 h-[6px] rounded-lg bg-slate-700' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {all_products.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />              
            }
            )}
        </div>
    </div>
  )
}

export default RelatedProducts;
