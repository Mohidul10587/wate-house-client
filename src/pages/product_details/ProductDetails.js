import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';
const ProductDetails = () => {
  const value = useContext(UserContext);
  const [user] = useAuthState(auth)

  const query = useParams()
  const productId = query.productId;

  const navigate = useNavigate()


  const { data: product, isLoading } = useQuery('product', () => fetch(`  https://cryptic-hollows-87605.herokuapp.com/product/${productId}`).then(res => res.json()))




  const addToCart = () => {

    if (!user) {
      navigate('/login')
    }


    fetch(`  https://cryptic-hollows-87605.herokuapp.com/cart/${user.email}`, {
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
        quantity: 1,
        customersEmail: user.email
      })
    })
      .then(res => res.json())
      .then(inserted => {
        if (inserted.result === 'fail') {
          toast.error('Product is already added')
        }
        else { 
          value.setCountCartProducts(value.countCartProducts+1)
          toast.success('Added successfully') }
      })
  }




  if (isLoading) {
    return <div className='min-h-[600px] flex justify-center font-bold text-2xl'> <p>Loading...</p></div>

  }
  return (
    <div className='min-h-[600px]'>
      <h1 className='text-3xl text-center'>Product Details</h1>
      <div className='flex justify-center mt-10'>

        <div className=' border-2 border-pink-900 overflow-hidden rounded-lg w-10/12  sm:flex py-8'>
          <img className='sm:w-1/2 sm:h-80' src={product.img} alt="" />
          <div className='sm:p-10 p-2 relative sm:w-1/2 sm:border-l-[1px] border-pink-700'>
            <p className='text-2xl'>{product.name}</p>
            <p className=''>💝Just awesome💝 Totally impressed❤️ Quality 100%👌 & same as picture. Product received as per as seller commitment. Thanks and highly recommend ❤️❤️ </p>

            <p className='text-2xl'>${product.price}</p>

            <div className='sm:absolute sm:bottom-4 '>
              <button className='rounded-lg px-3 py-2 bg-pink-500 text-white w-32 sm:mb-0 mb-3' onClick={addToCart}>Add to curt </button>
              <Link to='/'><button className='rounded-lg px-3 py-2 bg-pink-500 text-white w-32 sm:ml-2'>Go Back</button></Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails