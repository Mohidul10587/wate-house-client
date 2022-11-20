import React from 'react'
import { useQuery } from 'react-query'


const Orders = () => {


  const { data: orderedVouchers, isLoading } = useQuery('orderedVouchers', () => fetch('http://localhost:5001/orderedVoucher').then(res => res.json()))

  if (isLoading) {
    return <p>loading</p>
  }
  return (
    <div className=''>
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

    </div>
  )
}

export default Orders