import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Home = () => {


  const { data: items, isLoading } = useQuery(['items'], () => fetch(`http://localhost:5000/items`, {
    method: 'GET',
  }).then(res => res.json()))

  if (isLoading) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
  }

  return (
    <div>

      <div  className='grid grid-cols-3 gap-3 place-items-center'>
        {items.map(item => <div>
          <p>{item.name}</p>
          <img className='w-44 h-44 ' src={item.img} alt="" />

        </div>)}
      </div>
    </div>
  )
}

export default Home