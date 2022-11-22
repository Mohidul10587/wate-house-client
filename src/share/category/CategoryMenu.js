import React from 'react'
import { Link } from 'react-router-dom'

const CategoryMenu = () => {
    return (
        <div>
            <ul className='md:flex hidden justify-center fixed top-16 w-full z-30'>
                <li className='py-1 text-center group text-white mx-5 relative'> <Link to='/category/Women Fashion'>Women's Fashion</Link>

                    <div className='-left-11 top-[32px] absolute bg-white pt-[2px]'>
                        <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-56 '>
                            <li className='py-1 text-center'> <Link to='/subCategory/Clothing'>Clothing</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Winter Special'>Winter Special</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Muslim Were'>Muslim Were</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Shoes'>Shoes</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Watches'>Watches</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Jewellers'>Jewellers</Link></li>

                        </ul>
                    </div>
                </li>
                <li className='py-1 text-center group text-white mx-5 relative'><Link to='/category/Healths and Beauty'>Heath and Beauty</Link>
                    <div className='-left-11 top-[32px] absolute bg-white pt-[2px]'>
                        <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-56 '>
                            <li className='py-1 text-center'> <Link to='/subCategory/Bath and Body'>Bath and Body</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Beauty Tools'>Beauty Tools</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Fragrance'>Fragrance</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Hair Care'>Hair Care</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Makeup'>Makeup</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Mens Care'>Men's Care</Link></li>

                        </ul>
                    </div>
                </li>
                <li className='py-1 text-center group text-white mx-5 relative'><Link to='/category/Watches'>Watches and Bags</Link>
                    <div className='-left-11 top-[32px] absolute bg-white pt-[2px]'>
                        <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-56 '>
                            <li className='py-1 text-center'> <Link to='/subCategory/Kids'>Kids</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Laptop'>Laptop</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Luggage'>Luggage</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Travel Bags'>Travel Bags</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Mens Bags'>Mens Bags</Link></li>
                            <li className='py-1 text-center'> <Link to='/subCategory/Womens Bags'>Womens Bags</Link></li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CategoryMenu