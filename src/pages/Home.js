import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const { data: items, isLoading } = useQuery(['items'], () => fetch(`http://localhost:5000/items`, {
    method: 'GET',
  }).then(res => res.json()))

  if (isLoading) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
  }

  return (
    <div>
      <div className='grid grid-cols-3 gap-3 place-items-center text-center px-10'>
        {items?.slice(0, 6).map(item => <div key={item._id}className='border-2 border-pink-600 p-3 rounded-lg w-full'>
      <img className='w-full h-60' src={item.img} alt="" />
      <p className='font-bold mt-3'>{item.name}</p>
      <p>Price: {item.price}</p>
      <p className='text-justify h-32 overflow-y-scroll py-2'>{item.description}</p>
      <p>Quantity :{item.quantity}</p>
      <p>Supplier:{item.supplierName}</p>
      <Link to={`/inventory/${item._id}`}><button className=' text-white  rounded-md px-4 mt-2 py-2 bg-pink-500 hover:bg-pink-700'>Update Stock</button></Link>

    </div>)}
      </div>
      <div className='text-center mt-10'><Link to='/manageInventory'>  <button  className='px-3 py-3 text-white font-bold hover:bg-pink-700  bg-pink-500 rounded-md'> Manage Inventory</button></Link>
            </div>
      <div className='bg-green-300 mt-10 h-96 text-center'>
        First extra section
      </div>
      <div className='bg-red-300 mt-10 h-96 text-center'>
        Second extra section
      </div>
    </div>
  )
}

export default Home