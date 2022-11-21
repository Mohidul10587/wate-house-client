import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className='h-64 border-[1px] border-pink-900 overflow-hidden rounded-lg'>
            <Link to={`/productDetails/${product._id}`} className=''>


                <img className='w-full h-44 border-b-[1px] border-pink-900' src={product.img} alt="" />
                <div className='ml-2 pb-2'>
                    <p>{product.name}</p>
                    <p className='font-bold'>${product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard