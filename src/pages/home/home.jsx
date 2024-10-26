import React from 'react'
import Sidebar from '../../componnets/sidebar/sidebar'
import Navbar from '../../componnets/navbar/navbar'
import Card from '../../componnets/card/card'
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";

export default function Home() {
  return (
    <div className='h-[200vh]'>
        <Navbar/>
      <Sidebar/>
      <div className='pl-[300px]  pr-[30px] pt-[100px] '>
        <h2 className='text-gray-700 text-[18px] font-bold'>Report Analysis</h2>
        <div className='flex mt-3' >
          <Card name="Total Sales" value="2500"  bg="#d8b4fe" percentage="14" state="up" icon={<MdOutlineAttachMoney style={{fontSize:'30px'}} />}/>
          <Card name="Total Order" value="1500" bg="#86efac"  percentage="3.4" state="down" icon={<TbShoppingBagCheck  style={{fontSize:'30px'}}/>} />
          <Card name="Total Revenue" value="900" bg="#d1d5db" percentage="5.3"  state="down" icon={<GiTakeMyMoney  style={{fontSize:'30px'}}/>}/>
          <Card name="Total Customer" value="200"  bg="#7dd3fc" percentage="10.5" state="up" icon={<LuUsers  style={{fontSize:'30px'}}/>}/>

      </div>
      </div>
    </div>
  )
}
