import React from 'react'
import { Button } from 'primereact/button';

export default function ButtonComp(props) {
  return (
    <div>
      <Button label={props.name}  className='py-[4px] px-[15px] text-white bg-violet-500 mx-[4px]' />
    </div>
  )
}
