import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageInventory = () => {


  const { data: items, isLoading, refetch } = useQuery(['items'], () => fetch(`https://ware-house-lymk.onrender.com/items`, {
    method: 'GET',
  }).then(res => res.json()))


  const handleDelete = (id, name) => {

    fetch(`https://ware-house-lymk.onrender.com/items/${id}`, {
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


  if (isLoading) {
    return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
  }

  return (
    <div className='px-2'>

<div className='text-end pr-4 my-4'>
  <Link to='/form'><button className='btn bg-pink-500 hover:bg-pink-700'>Add new item</button></Link>
</div>

      <table  className="w-full  border-2 border-pink-500">
        <thead className='h-14 md:text-xl border-2 border-pink-500'>
          <tr>
            <th className='text-center '>Img</th>
            <th className='text-center '>Name</th>
            <th className='text-center '>Price</th>
            <th className='text-center '>Qnty</th>
            <th className='text-center '>Supplier</th>
            <th className='text-center '>Del</th>
          </tr>
        </thead>
        <tbody>

          {items?.map(item => <tr className='h-16 border-[1px] border-pink-500' key={item._id}>
            <td className='text-center'> <p className='flex justify-center'><img className='w-14  h-10 rounded-md border-2 border-black' src={item.img} alt="" /></p></td>
            <td className='text-center'>{item.name}</td>
            <td className='text-center'> {item.price} TK</td>
            <td className='text-center'>{item.quantity}</td>
            <td className='text-center'>{item.supplierName}</td>
            <td className='text-center'> <button className=' font-bold text-2xl text-red-500 rounded-full border-red-500 border-2 p-1' onClick={() => handleDelete(item._id, item.name)}><AiOutlineDelete /></button>
            </td>

          </tr>)}
        </tbody>
      </table>
    </div>

  )
}

export default ManageInventory
