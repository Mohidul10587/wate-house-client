import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const Item = () => {

    const [user] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const query = useParams()
    const id = query.id;

    const { data: item, isLoading, refetch } = useQuery(['item'], () => fetch(`http://localhost:5000/singleItem/${id}`, {
        method: 'GET',
    }).then(res => res.json()))

    const handleDelivered = id => {
        if (item.quantity > 0) {
            fetch(`http://localhost:5000/updateItemsQuantity/${id}`, {
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

        fetch(`http://localhost:5000/updateItemsQuantity/${id}`, {
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
        return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
    }
    return (
        <div>
            <div className='text-end'><Link to='/manageInventory'>  <button  className='px-3 py-3 text-white font-bold hover:bg-pink-700  bg-pink-500 rounded-md'> Manage Inventory</button></Link>
            </div>
            <div className='border-2 border-pink-600 p-3 mt-3'>
                <p>{item.name}</p>
                <img className='w-44 h-44 ' src={item.img} alt="" />
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{item.quantity}</p>
                <button onClick={() => handleDelivered(item._id)} className='px-3 py-3 text-white font-bold hover:bg-pink-700  bg-pink-500 rounded-md'>Delivered</button>
                <div className=''>

                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn mt-3 border-none hover:bg-pink-700  bg-pink-500">Add Item</label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-pink-500 hover:bg-pink-700">✕</label>
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
                                    className=" w-80 bg-pink-600 py-4 font-bold text-white rounded-md  mt-2 " />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item