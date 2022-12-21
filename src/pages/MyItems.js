import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const MyItems = () => {
const [user] = useAuthState(auth)
const email = user.email;

  const { data: items, isLoading,refetch } = useQuery(['items',user], () => fetch(`http://localhost:5000/myItems/${email}`, {
    method: 'GET',
  }).then(res => res.json()))

  if (isLoading) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
  }
  if (items.length ===0) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>You do not add any item</p></div>
  }
  const handleDelete = (id, name) => {

    fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',

    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount) {

          toast.success(`${name} is deleted`)
          refetch()
        }
      })
  }

  return (
    <div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-3 place-items-center text-center md:px-10 px-1'>
        {items?.map(item =>     <div key={item._id} className='border-2 border-pink-600 p-3 rounded-lg w-full'>
      <img className='w-full h-60' src={item.img} alt="" />
      <p className='font-bold mt-3'>{item.name}</p>
      <p>Price: {item.price}</p>
      <p className='text-justify h-32 overflow-y-scroll py-2'>{item.description}</p>
      <p>Quantity :{item.quantity}</p>
      <p>Supplier:{item.supplierName}</p>
      <button onClick={() => handleDelete(item._id, item.name)} className=' text-white  rounded-md px-4 mt-2 py-2 bg-pink-500 hover:bg-pink-700'>Delete</button>

    </div>)}
      </div>
    </div>
  )
}

export default MyItems