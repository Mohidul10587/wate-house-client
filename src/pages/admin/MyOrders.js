import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const MyOrders = () => {


  const [user] = useAuthState(auth)

  const customersEmail = user?.email;

  const { data: orderedVouchers, isLoading } = useQuery(['orderedVouchers', user], () => fetch(`https://cryptic-hollows-87605.herokuapp.com/orderedVoucher/${customersEmail}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))


  if (isLoading) {
    return <div className='min-h-[600px]'>
      Loading
    </div>
  }




  return (

    <div className='min-h-[600px] '>

      {orderedVouchers.length === 0 ?
        <div className='flex justify-center items-center  '>
          <div className='w-96'>
            <p className='text-3xl text-pink-700 font-bold'>Hi {user?.displayName}</p>
            <p className='text-xl text-pink-700 font-bold'>Please Buy something and see your shopping history here . Thank you for visiting our online shop</p>
          </div>
        </div>
        :
        <div className=''>
          <div className='w-full grid grid-cols-1 place-items-center  gap-y-4'>
            {orderedVouchers?.map(px => <div key={px._id} className=' sm:w-full w-[305px] sm:flex justify-between border-2 border-pink-700 sm:p-4 p-3'>
              <div className='sm:w-1/2'>
                <p className=''><span className='font-bold mr-2'>Customer's Name:</span>{px.name}</p>
                <p className=''><span className='font-bold mr-2'>Send Money from:</span>{px.bkashNumber}</p>
                <p className=''><span className='font-bold mr-2'>TrxID:</span>{px.trxID}</p>
                <p className=''><span className='font-bold mr-2'>Payed amount:</span>{px.amount}</p>
                <p className=''><span className='font-bold mr-2'>Total Price:</span>{px.requiredPrice}</p>
                <p className=''><span className='font-bold mr-2'>Address:</span>{px.address} , {px.city}</p>
              </div>
              <div className='sm:w-1/2 relative'>
                <p className='font-bold'>Ordered Items</p>
                <div>
                  {px.orderedProduct?.map(p => <div key={p._id}>
                    <p >{p.name}</p>
                  </div>)}
                </div>
              </div>
            </div>)}
          </div>
        </div>}

    </div>

  )
}

export default MyOrders