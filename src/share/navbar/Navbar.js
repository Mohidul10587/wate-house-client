import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import CategoryMenu from '../category/CategoryMenu'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {



  const [count, setCount] = useState(0);
  const [user] = useAuthState(auth)
  const customersEmail = user?.email;
  const navigate = useNavigate()


  useEffect(() => {
    fetch(`http://localhost:5001/cartProductsCount/${customersEmail}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [customersEmail, count])

  const signedOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/logIn');
  }

  return (
    <div className='h-24 bg-pink-800 fixed z-30 w-full'>
    <div className='h-24 bg-pink-800 fixed flex justify-between items-center z-30 w-full '>
      <Link to='/'> <p className=' font-bold py-2 w-32 text-white ml-4 text-3xl'>LOGO</p></Link>
      <div className='h-20 text-white flex justify-center items-center w-full'>
        <ul className='flex justify-center'>
          <li className='m-3 px-3 font-bold'><Link to='/'>Home</Link></li>

          {user && <Link to='dashboard'><li className='m-3 px-3 font-bold'>Dashboard</li></Link>}
          {user && <p className='m-3 px-3 font-bold'>{user?.displayName}</p>}
        </ul>
      </div>

      <div className='flex'>
       <Link to='/cart'> <p className='m-3 px-3 text-3xl font-bold text-white'><AiOutlineShoppingCart/> </p></Link>

        {user ? <button className=' font-bold py-2 w-32 text-white' onClick={signedOut}>Sign Out</button> : <Link to="/login"><button className="font-bold py-2 w-32 text-white" >Log In</button></Link>}
      </div>

      
    </div>
    <CategoryMenu />
    </div>
  )
}




export default Navbar