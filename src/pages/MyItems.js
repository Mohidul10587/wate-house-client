import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Item from '../components/Item';

const MyItems = () => {
const [user] = useAuthState(auth)
const email = user.email;

  const { data: items, isLoading } = useQuery(['items',user], () => fetch(`http://localhost:5000/myItems/${email}`, {
    method: 'GET',
  }).then(res => res.json()))

  if (isLoading) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
  }
  if (items.length ===0) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>You do not add any item</p></div>
  }

  return (
    <div>
      <div className='grid grid-cols-3 gap-3 place-items-center text-center px-10'>
        {items?.map(item => <Item  key={item._id} item={item}></Item>)}
      </div>
    </div>
  )
}

export default MyItems