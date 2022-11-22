import React from 'react'
import { Link } from 'react-router-dom'

const CategoryMenu = () => {
    return (
         <div>
            <ul className='md:flex hidden justify-center fixed top-16 w-full z-30'>
                <li className='py-1 group text-white mx-5 '> <Link to='/category/Women Fashion'>Women's Fashion</Link>

                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed pb-2 rounded rounded-b-md'>
                        <li className='py-1'> <Link to='/subCategory/Clothing'>Clothing</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Winter Special'>Winter Special</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Muslim Were'>Muslim Were</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Shoes'>Shoes</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Watches'>Watches</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Jewellers'>Jewellers</Link></li>

                    </ul>
                </li>
                <li className='py-1 group text-white mx-5 rounded-b-md'><Link to='/category/Healths and Beauty'>Heath and Beauty</Link>
                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed pb-2 rounded rounded-b-md'>
                        <li className='py-1'> <Link to='/subCategory/Bath and Body'>Bath and Body</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Beauty Tools'>Beauty Tools</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Fragrance'>Fragrance</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Hair Care'>Hair Care</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Makeup'>Makeup</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Mens Care'>Men's Care</Link></li>

                    </ul>
                </li>
                <li className='py-1 group text-white mx-5 rounded-b-md'><Link to='/category/Watches'>Watches and Bags</Link>
                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed pb-2 rounded rounded-b-md'>
                        <li className='py-1'> <Link to='/subCategory/Kids'>Kids</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Laptop'>Laptop</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Luggage'>Luggage</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Travel Bags'>Travel Bags</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Mens Bags'>Mens Bags</Link></li>
                        <li className='py-1'> <Link to='/subCategory/Womens Bags'>Womens Bags</Link></li>

                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CategoryMenu