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
        {items?.map(item => <div key={item._id} className='border-2 border-pink-600 p-3 rounded-lg w-full'>
          <img className='w-full h-60 ' src={item.img} alt="" />
          <p className='font-bold mt-3'>{item.name}</p>
          <p>Price: {item.price}</p>
          <p className='text-justify h-32 overflow-y-scroll py-2'>{item.description}</p>
          <p>Quantity :{item.quantity}</p>
          <p>Supplier:{item.supplierName}</p>
          <Link to={`item/${item._id}`}><button className='px-2 border-2 border-pink-900 rounded-md'>Update</button> </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Home