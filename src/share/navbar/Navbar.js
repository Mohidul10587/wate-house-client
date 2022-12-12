
import React from 'react'
import { Link,  } from 'react-router-dom'

import {AiOutlineHome} from 'react-icons/ai'

const Navbar = () => {

  return (

    <div className='sm:h-24 h-14 bg-pink-800 fixed z-30 w-full'>

      <div className='sm:h-28 h-14 bg-pink-800 fixed flex justify-between items-center z-30 w-full '>
        <Link className='md:w-1/3' to='/'> <p className=' font-bold py-2 text-white ml-4 sm:text-3xl text-xl'>LG </p></Link>
      
          <Link to='/form'> <p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'>Form</p></Link>
     
      </div>
    </div>
  )
}




export default Navbar