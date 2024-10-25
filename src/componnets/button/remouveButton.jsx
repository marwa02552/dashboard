import React from 'react'
import { Button } from 'primereact/button';

export default function RemouveButton(props) {
  return (
    <div>
            <Button label={props.name}  className='py-[4px] px-[15px] border-[1px] border-solid border-red-500 text-red-500 mx-[4px]' />
    </div>
  )
}
