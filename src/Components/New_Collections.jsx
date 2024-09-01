import React from 'react'
import Item from '../Components/Item'
import NewCollections from '../assets/new_collections'

const New_Collections = () => {
  return (
    <div className=' flex flex-col items-center gap-3 px-10 md:px-20'>
        <h1 className=' text-2xl md:text-4xl font-semibold mt-5 tracking-wide'>NEW COLLECTIONS</h1>
        <hr className=' w-36 md:w-48 h-[6px] rounded-lg bg-slate-700' />
        <div className=' md:flex flex-wrap gap-[30px] justify-center'>
            {NewCollections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default New_Collections
