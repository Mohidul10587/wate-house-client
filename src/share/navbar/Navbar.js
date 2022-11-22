import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import CategoryMenu from '../category/CategoryMenu'
import { AiOutlineShoppingCart,AiOutlineHome ,AiOutlineLogin} from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { VscSignOut } from 'react-icons/vsc'
import Dashboard from '../../pages/admin/Dashboard';

const Navbar = () => {

  const [dropdown, setDropdown] = useState(true)

  const [count, setCount] = useState(0);
  const [user] = useAuthState(auth)
  const customersEmail = user?.email;
  const navigate = useNavigate()


  useEffect(() => {
    fetch(`https://blooming-anchorage-14599.herokuapp.com/cartProductsCount/${customersEmail}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [customersEmail, count])

  const signedOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/logIn');
  }

  return (
   

 



   
    <div className='sm:h-24 h-14 bg-pink-800 fixed z-30 w-full'>
    <div className='sm:h-24 h-14 bg-pink-800 fixed flex justify-between items-center z-30 w-full '>
      <Link to='/'> <p className=' font-bold py-2 text-white ml-4 sm:text-3xl text-xl'>LG</p></Link>


        {/* menu for desktop device */}
        <div className='md:flex hidden'>
          {user && <Link className='' to='dashboard'><p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'><FaRegUser /></p></Link>}

          <Link to='/'> <p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'><AiOutlineHome/></p></Link>

          <Link to='/cart'> <p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'><AiOutlineShoppingCart /> </p></Link>

          {user ? <button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' onClick={signedOut}><VscSignOut/></button> : <Link to="/login"><button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' ><AiOutlineLogin/></button></Link>}
        </div>



        <svg className="md:hidden hover:border-white border-gray-800 mr-4" onClick={() => setDropdown(!dropdown)} width='20px' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

        <div className={dropdown ? ' bg-pink-600  md:hidden fixed sm:top-24 top-14 w-64  text-white z-30 -right-64 transition-all duration-700' : ' bg-pink-600 md:hidden fixed sm:top-24 top-14 w-64 right-0 text-white z-30 transition-all duration-700'} >

          {user &&<Link to='dashboard'>  <p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 "><FaRegUser /> Dashboard </p></Link>}
          <Link to='/'><p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 "><AiOutlineHome/> Home</p></Link>
          <Link to='/cart'><p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 "><AiOutlineShoppingCart /> Cart</p></Link>

          {user ? <button className='border hover:border-white px-2 mx-2 border-pink-700  my-2 ' onClick={signedOut}><VscSignOut/>Logout</button> : <Link to="/login"><button className='border hover:border-white px-2 mx-2 border-pink-700  my-2 ' ><AiOutlineLogin/> Login</button></Link>}

        </div>





        </div>
      <CategoryMenu />

    </div>
  )
}




export default Navbar