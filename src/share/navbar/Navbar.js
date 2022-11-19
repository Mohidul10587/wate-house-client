import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import CategoryMenu from '../category/CategoryMenu'

const Navbar = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const signedOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/logIn');
  }

  return (
    <div className='h-24 bg-pink-800 fixed z-30 w-full'>
      <div className='h-20 text-white flex justify-center items-center w-full fixed z-30'>
        <ul className='flex justify-center'>
          <li className='m-3 px-3 font-bold'><Link to='/'>Home</Link></li>
          <li className='m-3 px-3 font-bold'><Link to='/cart'>Cart</Link></li>
          <li className='m-3 px-3 font-bold'><Link to='/form'>Product Upload  Form</Link></li>
          <li className='m-3 px-3 font-bold'><Link to='/orders'>Order List</Link></li>
          <li className='m-3 px-3 font-bold'><Link to='/userDashboard'>Dashboard</Link></li>

          <li>{user ? <button className="btn btn-ghost" onClick={signedOut}>Sign Out</button> : <Link className="btn btn-ghost" to="/login"><button>Log In</button></Link>}</li>
        </ul>
      </div>
      <CategoryMenu />
    </div>
  )
}




export default Navbar