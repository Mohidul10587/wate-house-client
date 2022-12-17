import { useQuery } from '@tanstack/react-query'
import React from 'react'

import Item from '../components/Item';

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
      {items?.slice(0,6).map(item => <Item  key={item._id} item={item}></Item>)}
      </div>
    </div>
  )
}

export default Home