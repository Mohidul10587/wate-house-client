import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Item = () => {

    const [openModal, setOpenModal] = useState(true)

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
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: item.quantity - 1,
                    description: item.description
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {

                        refetch()
                    }
                })

        }
    }



    const onSubmit = async data => {
        setOpenModal(false)
        fetch(`http://localhost:5000/updateItemsQuantity/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: item.name,
                price: item.price,
                img: item.img,
                quantity: item.quantity + parseInt(data.quantity),
                description: item.description
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    refetch()
                }
            })



    }
    if (isLoading) {
        return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
    }


    return (
        <div className='border-2 border-pink-600 p-3'>
            <p>{item.name}</p>
            <img className='w-44 h-44 ' src={item.img} alt="" />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.quantity}</p>
            <button onClick={() => handleDelivered(item._id)} className='px-2 border-2 border-pink-900 rounded-md'>Delivered</button>
            <div className=''>




                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">open modal</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                     
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>

                                </label>
                                <input

                                    type="number"
                                    placeholder="Name"
                                    className="input input-bordered border-black w-full max-w-xs"

                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'This is required field'
                                        }

                                    })} />

                                <label className="label">

                                    {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

                                </label>




                            </div>





                            <button
                                type="submit"
                                className="btn btn-outline  mt-10 hover:bg-pink-700"><label htmlFor="my-modal-3" className='px-32'>Add</label></button>


                        </form>
                    </div>
                </div>

                









            </div>

        </div>
    )
}

export default Item