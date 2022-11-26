import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';
import auth from '../../firebase.init';


const Checkout = () => {
  const value = useContext(UserContext);
  const [user] = useAuthState(auth)
  const customersEmail = user?.email;
  const { data: products, refetch } = useQuery(['products', customersEmail],() => fetch(`https://cryptic-hollows-87605.herokuapp.com/cart/${customersEmail}`).then(res => res.json()))

  const { register, formState: { errors }, handleSubmit, reset } = useForm();







  // Total price calculation






  const onSubmit = async data => {



    const getTotalPrice2 =  () => {
      let total = 0;
      for (let i = 0; i < products?.length; i++) {
        total = total + parseInt(products[i].price)*parseInt(products[i].quantity)

      }
      return total;
    }
    const totalPrice2 = getTotalPrice2()
  
  
    // // Shipping charge calculation
    const shippingCharge2 = Math.round(totalPrice2 * 0.05)
  
    // // Sub total calculation
  
    const subTotal2 = shippingCharge2 + totalPrice2;
  
    console.log(subTotal2)
  
  
    const order = {
      name: data.name,
      phone: data.phone,
      customersEmail:customersEmail,
      address: data.address,
      city: data.city,
      zip_code: data.zip_code,
      bkashNumber: data.bkashNumber,
      amount: data.amount,
      trxID: data.trxID,
      requiredPrice: subTotal2,
      orderedProduct: products

    }

    fetch('https://cryptic-hollows-87605.herokuapp.com/orderedVoucher', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(inserted => {
        console.log(inserted)
        toast.success('Address ')
        reset()
      })


    fetch(`https://cryptic-hollows-87605.herokuapp.com/cart2/${customersEmail}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount) {
         
          toast.success(`Cart Items is removed`)
          refetch()
          value.setCountCartProducts(0)
        }
      })
  }



  return (
    <div className='min-h-[600px]'>


      <h1 className='text-center text-2xl font-bold mb-6'>Add a shipping address</h1>
      <div className='flex justify-center'>
        <form className='w-[800px]' onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>

            </label>
            <input

              type="text"
              placeholder="Name"
              className="input input-bordered border-black w-full "

              {...register("name", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

            </label>

          </div>
          {/* Phone */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone Number</span>

            </label>
            <input

              type="number"
              placeholder="Phone"
              className="input input-bordered border-black w-full "

              {...register("phone", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.phone?.type === 'required' && <span className='text-red-500'>{errors.price?.message}</span>}

            </label>

          </div>


          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input

              type="text"
              placeholder="Address"
              className="input input-bordered border-black w-full "

              {...register("address", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.address?.type === 'required' && <span className='text-red-500'>{errors.category?.message}</span>}

            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">City</span>

            </label>
            <input

              type="text"
              placeholder="City"
              className="input input-bordered border-black w-full "

              {...register("city", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />
            <label className="label">
              {errors.city?.type === 'required' && <span className='text-red-500'>{errors.sub_category?.message}</span>}

            </label>
          </div>


          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Zip Code</span>

            </label>
            <input

              type="number"
              placeholder="Zip Code"
              className="input input-bordered border-black w-full "

              {...register("zip_code", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />
            <label className="label">
              {errors.zip_code?.type === 'required' && <span className='text-red-500'>{errors.sub_category?.message}</span>}

            </label>
          </div>


          <h1 className='text-center text-2xl font-bold mb-6'>Payment</h1>
          <p> Send your money to this merchant bkash account 017xxxxxxxx ; Put the sender bkash number , amount of money and TrxID in the input box</p>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone Number</span>

            </label>
            <input

              type="number"
              placeholder="Your bkash Number"
              className="input input-bordered border-black w-full "

              {...register("bkashNumber", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.phone?.type === 'required' && <span className='text-red-500'>{errors.price?.message}</span>}

            </label>

          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Amount of money</span>

            </label>
            <input

              type="number"
              placeholder="Amount of money"
              className="input input-bordered border-black w-full "

              {...register("amount", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.phone?.type === 'required' && <span className='text-red-500'>{errors.price?.message}</span>}

            </label>

          </div>
          {/* Transaction Id or TrxID */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Transaction Id or TrxID</span>

            </label>
            <input

              type="number"
              placeholder="Transaction Id or TrxID"
              className="input input-bordered border-black w-full "

              {...register("trxID", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.phone?.type === 'required' && <span className='text-red-500'>{errors.price?.message}</span>}

            </label>

          </div>
          <button

            type="submit"
            className="rounded-lg py-3 px-6 border-2 border-pink-700 hover:bg-pink-800 hover:text-white w-full text-4xl mt-10">Place Order</button>


        </form>
      </div>
    </div>
  )
}

export default Checkout