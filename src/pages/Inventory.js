import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Item = () => {

    const [user] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const query = useParams()
    const id = query.id;

    const { data: item, isLoading, refetch } = useQuery(['item'], () => fetch(`https://ware-house-lymk.onrender.com/singleItem/${id}`, {
        method: 'GET',
    }).then(res => res.json()))

    const handleDelivered = id => {
        if (item.quantity > 0) {
            fetch(`https://ware-house-lymk.onrender.com/updateItemsQuantity/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({

                    quantity: item.quantity - 1,

                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        toast.success('Delivered successfully')
                        refetch()
                    }
                })

        }
    }



    const onSubmit = async data => {

        fetch(`https://ware-house-lymk.onrender.com/updateItemsQuantity/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                quantity: parseInt(item.quantity) + parseInt(data.quantity),
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Quantity Added')
                    refetch()
                    reset()
                }
            })

    }
    if (isLoading) {
        return <div className=' flex justify-center font-bold text-3xl mt-10'><Spinner /></div>
    }
    return (
        <div>
            
            <div className='text-end '><Link to='/manageInventory'>  <button  className='px-3 py-3 text-white font-bold hover:bg-gray-700  bg-gray-500 rounded-md'> Manage Inventory</button></Link>
            </div>
            <div className='b p-3 mt-3'>
                <p className='text-center font-bold text-4xl mb-4'>{item.name}</p>
               <div className='flex justify-center'>
               <img className=' w-8/12 ' src={item.img} alt="" />
               </div>
                <p>Price:{item.price} TK</p>
                <p>{item.description} </p>
                <p>Quantity: {item.quantity}</p>
              <div className='flex justify-center mt-8'>
              <button onClick={() => handleDelivered(item._id)} className='px-3 btn border-none  text-white font-bold hover:bg-gray-700  bg-gray-500 rounded-md'>DELIVERED</button>
                <div className='ml-2'>

                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn border-none hover:bg-gray-700  bg-gray-500">Add Item</label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-gray-500 hover:bg-gray-700">✕</label>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input

                                        type="number"
                                        placeholder="Quantity"
                                        className="input input-bordered border-black w-full "

                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'This is required field'
                                            }

                                        })} />

                                    <label className="label">

                                        {errors.quantity?.type === 'required' && <span className='text-red-500'>{errors.quantity?.message}</span>}

                                    </label>
                                </div>
                                <input
                                    type="submit"
                                    value='Add'
                                    className=" w-80 bg-gray-600 py-4 font-bold text-white rounded-md  mt-2 " />

                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Item