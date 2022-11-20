import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const ProductDetails = () => {
  const [user] = useAuthState(auth)

  const query = useParams()
  const productId = query.productId;




  const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:5001/product/${productId}`).then(res => res.json()))




  const addToCart = () => {

    fetch(`http://localhost:5001/cart/${user.email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
        category: product.category,
        sub_category: product.sub_category,
        img: product.img,
        quantity:1,
        customersEmail: user.email
      })
    })
      .then(res => res.json())
      .then(inserted => {
        if (inserted.result === 'fail') {
          toast.error('Product is already added')
        }
        else { toast.success('Added successfully') }
      })
  }




  if (isLoading) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1 className='text-3xl text-center'>This is product details page</h1>
      <div className='flex justify-center'>

        <div className=' border-2 border-pink-900 overflow-hidden rounded-lg w-10/12  flex'>
          <img className='w-1/2 h-80' src={product.img} alt="" />
          <div className='p-10 relative'>
            <p className='text-2xl'>{product.name}</p>
            <p className=''>💝Just awesome💝 Totally impressed❤️ Quality 100%👌 & same as picture. Product received as per as seller commitment. Thanks and highly recommend ❤️❤️ </p>
        
            <p className='text-2xl'>${product.price}</p>

            <div className='absolute bottom-4'>
            <button className='rounded-lg px-3 py-2 bg-pink-700 text-white w-32' onClick={addToCart}>Add to curt </button>
            <button className='rounded-lg px-3 py-2 bg-pink-700 text-white w-32 ml-2'>Buy now </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails