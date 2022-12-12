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
    <div>{items.length}</div>
  )
}

export default Home