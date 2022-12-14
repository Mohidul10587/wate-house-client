
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

    <div className='sm:h-24 h-14 bg-pink-800 fixed z-30 w-full'>

      <div className='sm:h-28 h-14 bg-pink-800 fixed flex justify-between items-center z-30 w-full '>
        <Link className='md:w-1/3' to='/'> <p className=' font-bold py-2 text-white ml-4 sm:text-3xl text-xl'>LG </p></Link>

        <Link to='/form'> <p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'>Form</p></Link>
        {user ? <button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' onClick={signedOut}><VscSignOut /></button> : <Link to="/login"><button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' ><AiOutlineLogin /></button></Link>}
      </div>
    </div>
  )
}




export default Navbar