
import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineLogin } from 'react-icons/ai';
import { Link, useNavigate, } from 'react-router-dom'
import auth from '../../firebase.init';
import { VscSignOut } from 'react-icons/vsc'


const Navbar = () => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const signedOut = () => {
    signOut(auth);
    navigate('/logIn');
  }

  return (

    <div className=''>

      <div className=' bg-pink-800 sm:h-20 h-14 fixed flex justify-between items-center z-30 w-full '>
        <Link className='md:w-1/3' to='/'> <p className=' font-bold py-2 text-white ml-4 sm:text-3xl text-xl'>LG </p></Link>
    
       
        
        {user ? <div className='flex'>
        <Link to='/manageInventory'> <p className='sm:mx-3 mx-1 my-3 px-3  font-bold text-white'> Manage Inventory</p></Link>
          <Link to='/myItems'> <p className='sm:mx-3 mx-1 my-3 px-3  font-bold text-white'>My Items</p></Link>
          <button className='sm:mx-3 mx-1  my-3 px-3  font-bold text-white' onClick={signedOut}> Log Out</button>
        </div> : <Link to="/login"><button className='sm:mx-3 mx-1 my-3 px-3  font-bold text-white' >Log In</button></Link>}

      </div>
    </div>
  )
}




export default Navbar