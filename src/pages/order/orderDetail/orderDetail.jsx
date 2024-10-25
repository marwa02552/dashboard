import React from 'react'
import { useParams } from 'react-router-dom';
export default function OrderDetail() {
    const { id } = useParams();

  return (
    <div>
      order with {id}
    </div>
  )
}
