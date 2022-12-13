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

      <div className='grid grid-cols-3 gap-3 place-items-center text-center'>
        {items?.map(item => <div key={item._id} className='border-2 border-pink-600 p-3'>
          <p>{item.name}</p>
          <img className='w-44 h-44 ' src={item.img} alt="" />
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.quantity}</p>
          <Link to={`item/${item._id}`}><button className='px-2 border-2 border-pink-900 rounded-md'>Update</button> </Link>

        </div>)}
      </div>
    </div>
  )
}

export default Home