import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className='border-2 border-pink-600 p-3 rounded-lg w-full'>
      <img className='w-full h-60' src={item.img} alt="" />
      <p className='font-bold mt-3'>{item.name}</p>
      <p>Price: {item.price}</p>
      <p className='text-justify h-32 overflow-y-scroll py-2'>{item.description}</p>
      <p>Quantity :{item.quantity}</p>
      <p>Supplier:{item.supplierName}</p>
      <Link to={`/inventory/${item._id}`}><button className=' text-white  rounded-md px-4 mt-2 py-2 bg-pink-500 hover:bg-pink-700'>Update Stock</button></Link>

    </div>
  )
}

export default Item