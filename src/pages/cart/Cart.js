import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'


const Cart = () => {


  const [user] = useAuthState(auth)
  const customersEmail = user?.email;
  const { data: products, isLoading, refetch } = useQuery(['products', customersEmail], () => fetch(`https://blooming-anchorage-14599.herokuapp.com/cart/${customersEmail}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  }).then(res => res.json()))



  // Total price calculation

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < products?.length; i++) {
      total = total + parseInt(products[i].price) * parseInt(products[i].quantity)
    }
    return total;
  }
  const totalPrice = getTotalPrice()


  // Shipping charge calculation
  const shippingCharge = Math.round(totalPrice * 0.05)

  // Sub total calculation

  const subTotal = shippingCharge + totalPrice;


  // increase quantity


  const increase = (id, p) => {

    fetch(`https://blooming-anchorage-14599.herokuapp.com/cart/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: p.name,
        price: p.price,
        category: p.category,
        sub_category: p.sub_category,
        img: p.img,
        quantity: p.quantity + 1,
        customersEmail: user.email
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch()
        }
      })


  }


  const decrease = (id, p) => {

    fetch(`https://blooming-anchorage-14599.herokuapp.com/cart/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: p.name,
        price: p.price,
        category: p.category,
        sub_category: p.sub_category,
        img: p.img,
        quantity: p.quantity - 1,
        customersEmail: user.email
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch()
        }
      })


  }



  // Delete a cart item

  const handleDelete = (id, name) => {

    fetch(`https://blooming-anchorage-14599.herokuapp.com/cart/${id}`, {
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
    return <div className='md:min-h-[600px]'>
      <p>loading</p>
    </div>
  }
  if (products.length === 0) return <div className='md:min-h-[600px]'> <p>Sorry you don add any product to catt. Please Add To Cart any product.</p></div>

  return (

    <div className='md:min-h-[600px]'>
      <h1 className='text-center font-bold text-2xl'>This is Cart</h1>

      <div className='flex mt-10'>
        <table className='w-1/2'>
          <thead className='border-[1px] border-pink-700'>
            <tr>
              <th className='w-24 text-center'>Img</th>
              <th className='w-24 text-center'>Name</th>
              <th className='w-24 text-center'>Price</th>
              <th className='w-24 text-center'>Quantity</th>
              <th className='w-24 text-center'>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {products.map(p => <tr key={p._id} className='border-[1px] border-pink-700'>
              <td className='text-center'><img className='w-16 h-10 border-[1px] p-2 border-pink-700 ml-4' src={p.img} alt="" /></td>
              <td className='text-center'>{p.name}</td>
              <td className='text-center'>{p.price}</td>
              <td className='text-center'><button className='px-2 mx-2 font-bold border-gray-600 ' onClick={() => decrease(p._id, p)}>-</button><span className=''>{p.quantity}</span> <button className='px-2 mx-2 font-bold  border-gray-600 r' onClick={() => increase(p._id, p)}>+</button></td>
              <td className='text-center'><button onClick={() => handleDelete(p._id, p.name)}>Delete</button></td>
            </tr>

            )}
          </tbody>
        </table>
        <div className='w-1/2  flex justify-center '>
          <div className='border-[1px] border-pink-700 p-4'>
            <h1 className='text-xl font-bold'> Order summary</h1>
            <p>Total Items : {products.length}</p>
            <p>Total Price:{totalPrice}</p>
            <p>Shipping Charge : {shippingCharge}</p>
            <p>Sub Total : {subTotal}</p>

        
              <div className='flex justify-center mt-6'>
                <button className='text-center w-full px-2 py-1 bg-pink-500 text-white rounded-md  text-sm'>  <Link to='/checkout'>Send Order</Link></button>

              </div>
              <div className='flex justify-center mt-2'>
                <button className='text-center px-2 py-1 w-full bg-pink-500 text-white rounded-md  text-sm'>  <Link to='/'>Continue Shopping</Link></button>
              </div>

          </div>
        </div>
      </div>


    </div>



  )
}

export default Cart