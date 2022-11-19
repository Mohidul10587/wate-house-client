import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const Cart = () => {





  const [user] = useAuthState(auth)
  const customersEmail = user?.email;
  const { data: products, isLoading, refetch } = useQuery(['products', customersEmail],() => fetch(`http://localhost:5001/cart/${customersEmail}`).then(res => res.json()))



  // Total price calculation

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < products?.length; i++) {
      total = total + parseInt(products[i].price)
    }
    return total;
  }
  const totalPrice = getTotalPrice()


  // Shipping charge calculation
  const shippingCharge = Math.round(totalPrice * 0.05)

  // Sub total calculation

  const subTotal = shippingCharge + totalPrice;







  // Delete a cart item

  const handleDelete = (id,name) => {

    fetch(`http://localhost:5001/cart/${id}`, {
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
    return <p>loading</p>
  }

  return (

    <div>
      <h1 className='text-center font-bold text-2xl'>This is Cart</h1>

      <div className='flex'>
        <div className='w-1/2'>
          {products.map(p => <div key={p._id} className='flex justify-between w-2/3 my-2 h-20 items-center'>
            <img className='w-16 h-10 border-2 border-black' src={p.img} alt="" />
            <p className='w-32'>{p.name}</p>
            <p>{p.price}</p>
            <button onClick={() => handleDelete(p._id, p.name)}>Delete</button>
          </div>)}
        </div>
        <div className='w-1/2 mt-6 flex justify-center'>
          <div>
            <h1 className='text-xl font-bold'> Order summary</h1>
            <p>Total Items : {products.length}</p>
            <p>Total Price:{totalPrice}</p>
            <p>Shipping Charge : {shippingCharge}</p>
            <p>Sub Total : {subTotal}</p>

            <button className='text-center px-4 py-2 bg-pink-700 text-white rounded-xl mt-10'>  <Link to='/checkout'>Proceed to checkout</Link></button>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Cart