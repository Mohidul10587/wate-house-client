import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const MyOrders = () => {


    const [user] = useAuthState(auth)
   
    const customersEmail = user?.email;
  
    const { data: orderedVouchers, isLoading } = useQuery(['orderedVouchers', user], () => fetch(`https://blooming-anchorage-14599.herokuapp.com/orderedVoucher/${customersEmail}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()))


    if (isLoading) {
        return <div className='md:min-h-[600px]'>
          Loading
        </div>
      }
     



  return (
    <div>
       <div className='md:min-h-[600px] '>
     
     {orderedVouchers.length===0 ?<div className='flex justify-center items-center md:min-h-[600px] '> <div className='w-96'>
       <p className='text-3xl text-pink-700 font-bold'>Hi {user?.displayName}</p>
     <p className='text-xl text-pink-700 font-bold'>Please Buy something and see your shopping history here . Thank you for visiting our online shop</p>
       
       </div></div>: <div className='md:min-h-[600px]'>
      
      <div className='w-1/2 '>
 
        {orderedVouchers?.map(px => <div key={px._id} className='w-2/3 mb-10'>
          <p className='w-96 flex justify-between'><span className='font-bold'>Customer's Name:</span>{px.name}</p>
          <p className='w-96 flex justify-between'><span className='font-bold'>Send Money from:</span>{px.bkashNumber}</p>
          <p className='w-96 flex justify-between'><span className='font-bold'>TrxID:</span>{px.trxID}</p>
          <p className='w-96 flex justify-between'><span className='font-bold'>Payed amount:</span>{px.amount}</p>
          <p className='w-96 flex justify-between'><span className='font-bold'>Total Price:</span>{px.requiredPrice}</p>
          <p className='w-96 flex justify-between'><span className='font-bold'>Address:</span>{px.address} , {px.city}</p>
 
          <div className='group '>
            <p className='font-bold'>Ordered Items</p>
            <div className='hidden group-hover:flex justify-between'>
              {px.orderedProduct?.map(p => <p key={p._id}>{p.name}</p>)}
            </div>
          </div>
 
        </div>)}
 
      </div>
 
    </div>}
 
    </div> 
    </div>
  )
}

export default MyOrders