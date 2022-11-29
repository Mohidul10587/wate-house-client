import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'


const Orders = () => {


  const { data: orderedVouchers, isLoading, refetch } = useQuery('orderedVouchers', () => fetch('https://cryptic-hollows-87605.herokuapp.com/orderedVoucher', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  }).then(res => res.json()))

  const deleteVoucher = id => {

    fetch(`https://cryptic-hollows-87605.herokuapp.com/orderedVoucher/${id}`, {
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


      <div className='px-4'>
        {orderedVouchers?.map(px => <div key={px._id} className='mb-10  border-2 border-pink-700  relative'>
          <div className='sm:flex justify-between'>
          <div className='sm:w-1/2'>
            <p className=''><span className='font-bold mr-2'>Customer's Name:</span>{px.name}</p>
            <p className=''><span className='font-bold mr-2'>Send Money from:</span>{px.bkashNumber}</p>
            <p className=''><span className='font-bold mr-2'>TrxID:</span>{px.trxID}</p>
            <p className=''><span className='font-bold mr-2'>Payed amount:</span>{px.amount}</p>
            <p className=''><span className='font-bold mr-2'>Total Price:</span>{px.requiredPrice}</p>
            <p className=''><span className='font-bold mr-2'>Address:</span>{px.address} , {px.city}</p>

          </div>
          <div className='sm:w-1/2 relative '>
            <div className='  mb-5 border-b-2 border-black '>
              <p className='font-bold'>Order Summary</p>

              {px.orderedProduct?.map(p => <div className='flex justify-between' key={p._id}>
                <img src={p.img} className='w-4' alt="" />
                <p>{p.name}</p>
                <p>{p.quantity}pcs x ${p.price}</p>

                <p>=${p.quantity * p.price}</p>


              </div>)}
              <p></p>


            </div>

          </div>
          </div>
          <div className='   w-full flex justify-end'>
            <button className='   bg-red-700 px-3 py-1 rounded-md text-white font-bold' onClick={() => deleteVoucher(px._id)}>Delete</button>

          </div>
        </div>)}

      </div>

    </div>
  )
}

export default Orders