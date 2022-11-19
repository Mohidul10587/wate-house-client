import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to={`/productDetails/${product._id}`} className='border-[1px] border-pink-900 overflow-hidden rounded-lg'>


            <img className='w-full h-72 border-b-[1px] border-pink-900' src={product.img} alt="" />
            <div className='ml-2 pb-2'>
                <p>{product.name}</p>
                <p className='font-bold'>${product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard