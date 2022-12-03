import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const MyOrders = () => {


  const [user] = useAuthState(auth)

  const customersEmail = user?.email;

  const { data: orderedVouchers, isLoading } = useQuery(['orderedVouchers', user], () => fetch(`    https://new-e-commerce-server-4oscdiny6-mohidul10587.vercel.app/orderedVoucher/${customersEmail}`, {
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

    <div className='min-h-[600px]'>
      <div className='px-4'>
        {orderedVouchers?.map(px => <div key={px._id} className='mb-10 p-4  border-2 rounded-md border-pink-700  relative'>
          <div>
          
              <div className=' border-b-[1px] border-black '>
              <p className='font-bold'>Date :{px.date}/{px.month}/{px.year}</p>
                <div className='flex justify-between border-b-[1px] border-black mb-1'>
                  <p className='text-center w-20 font-bold'>Img</p>
                  <p className='text-center w-20 font-bold'>Name</p>

                  <p className='text-center w-20 font-bold'>Qnt*Prc</p>

                  <p className='text-center w-20 font-bold'>Price</p>

                </div>
                {px.orderedProduct?.map(p => <div className='flex justify-between mb-1' key={p._id}>
                 <div className='w-20 flex justify-center '>
                 <img src={p.img} className='w-8 h-8' alt="" />
                 </div>
                  <p  className='text-center w-20'>{p.name}</p>
                  <p  className='text-center w-20'>{p.quantity}x{p.price}</p>
                  <p  className='text-center w-20'>${p.quantity * p.price}</p>
                </div>)}
              </div>
              <div className='flex justify-between'>
                <p className='text-center w-20 '>Total</p>
                <p className='text-center w-20 '>${px.onlyProductsPriceTotal}</p>

              </div>
              <div className='flex justify-between border-b-[1px] border-black'>
                <p className='text-center w-20 '>Shipping</p>
                <p className='text-center w-20 '>${px.shippingCharge}</p>

              </div>
              <div className='flex justify-between font-bold'>
                <p className='text-center w-20 '>Total</p>
                <p className='text-center w-20 '>${px.totalRequiredPrice}</p>

              </div>
            
          </div>

        </div>)}

      </div>

    </div>

  )
}

export default MyOrders