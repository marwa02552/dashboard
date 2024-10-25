import React from 'react'
import Sidebar from '../../componnets/sidebar/sidebar'
import Navbar from '../../componnets/navbar/navbar'
export default function Home() {
  return (
    <div className='h-[200vh]'>
        <Navbar/>
      <Sidebar/>
      <div className='pl-[270px]'>
      </div>
    </div>
  )
}
