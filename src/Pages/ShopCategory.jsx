  import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../src/Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../../src/Components/Item'



const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
console.log(all_product);

  return (
    <div className=' mt-[81px] md:px-20 px-3 flex flex-col items-center justify-center'>
      <img src={props.banner} alt="" />

      <div>


        <div className=' md:flex items-center md:justify-between mt-7 space-y-2'>
          <p>
            <span className=' font-semibold'>Showing 1-12</span> out of 36 products
          </p>

          <div className=' flex justify-center items-center border-2 rounded-full px-5 py-1 gap-1'>
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>

        <div className=' md:flex flex-wrap gap-[30px] items-center justify-center'>
            {all_product.map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
            })}
        </div>
      </div>

      <div className=' flex items-center justify-center m-10'>
        <button className=' px-10 p-3 hover:bg-slate-300 bg-slate-200 text-black text-xl rounded-full'>Load More</button>
      </div>

    </div>
  )
}

export default ShopCategory;
