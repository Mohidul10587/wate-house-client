import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'


const Orders = () => {


  const { data: orderedVouchers, isLoading, refetch } = useQuery('orderedVouchers', () => fetch('https://blooming-anchorage-14599.herokuapp.com/orderedVoucher', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  }).then(res => res.json()))

  const deleteVoucher = id => {

    fetch(`https://blooming-anchorage-14599.herokuapp.com/orderedVoucher/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Voucher deleted from collections')
          refetch()
        } else {
          toast.error('Do not deleted')
        }
      })

  }



  if (isLoading) {
    return <p className='min-h-[600px]'>loading</p>
  }
  return (
    <div className='min-h-[600px]'>


      <div className=''>
        {orderedVouchers?.map(px => <div key={px._id} className='mb-10 flex justify-between border-2 border-pink-700 p-4'>
          <div className='w-1/2'>
            <p className=''><span className='font-bold mr-2'>Customer's Name:</span>{px.name}</p>
            <p className=''><span className='font-bold mr-2'>Send Money from:</span>{px.bkashNumber}</p>
            <p className=''><span className='font-bold mr-2'>TrxID:</span>{px.trxID}</p>
            <p className=''><span className='font-bold mr-2'>Payed amount:</span>{px.amount}</p>
            <p className=''><span className='font-bold mr-2'>Total Price:</span>{px.requiredPrice}</p>
            <p className=''><span className='font-bold mr-2'>Address:</span>{px.address} , {px.city}</p>

          </div>
          <div className='w-1/2 relative'>
            <p className='font-bold'>Ordered Items</p>
            <div>
              {px.orderedProduct?.map(p => <div key={p._id}>
                <p >{p.name}</p>
              </div>)}
            </div>

            <button className='absolute bottom-0 right-0 bg-red-700 px-3 py-1 rounded-md text-white font-bold' onClick={() => deleteVoucher(px._id)}>Delete</button>
          </div>

        </div>)}

      </div>

    </div>
  )
}

export default Orders