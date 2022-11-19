import React from 'react'
import { Link } from 'react-router-dom'

const CategoryMenu = () => {
    return (
         <div>
            <ul className='flex justify-center fixed top-16 w-full z-30'>
                <li className=' group text-white mx-5'> <Link to='/category/Women Fashion'>Women's Fashion</Link>

                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed'>
                        <li className=''> <Link to='/subCategory/Clothing'>Clothing</Link></li>
                        <li className=''> <Link to='/subCategory/Winter Special'>Winter Special</Link></li>
                        <li className=''> <Link to='/subCategory/Muslim Were'>Muslim Were</Link></li>

                    </ul>
                </li>
                <li className=' group text-white mx-5'><Link to='/category/Healths and Beauty'>Heath and beauty</Link>
                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed'>
                        <li className=''> <Link to='/subCategory/Bath and Body'>Bath and Body</Link></li>
                        <li className=''> <Link to='/subCategory/Beauty Tools'>Beauty Tools</Link></li>
                        <li className=''> <Link to='/subCategory/Fragrance'>Fragrance</Link></li>

                    </ul>
                </li>
                <li className=' group text-white mx-5'><Link to='/category/Watches'>Watches and Bags</Link>
                    <ul className='hidden group-hover:block bg-pink-800 text-white pt-4 px-2 fixed'>
                        <li className=''> <Link to='/subCategory/Kids'>Kids</Link></li>
                        <li className=''> <Link to='/subCategory/Laptop'>Laptop</Link></li>
                        <li className=''> <Link to='/subCategory/Luggage'>Luggage</Link></li>

                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CategoryMenu