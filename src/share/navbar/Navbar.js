import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineLogin } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { VscSignOut } from 'react-icons/vsc'
import { useContext } from "react";
import { UserContext } from '../../App';




const Navbar = () => {

  const value = useContext(UserContext);
  const [dropdown, setDropdown] = useState(true)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()



  const signedOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/logIn');
  }

  return (







    <div className='sm:h-24 h-14 bg-pink-800 fixed z-30 w-full'>
      <div className='sm:h-24 h-14 bg-pink-800 fixed flex justify-between items-center z-30 w-full '>
        <Link to='/'> <p className=' font-bold py-2 text-white ml-4 sm:text-3xl text-xl'>LG </p></Link>


        {/* menu for desktop device */}
        <div className='md:flex hidden'>
          {user && <Link className='' to='dashboard'><p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'><FaRegUser /></p></Link>}

          <Link to='/'> <p className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white'><AiOutlineHome /></p></Link>

          <Link to='/cart'> <div className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white flex'><AiOutlineShoppingCart /> <p className='font-normal text-sm'><sup>{value.countCartProducts}</sup></p> </div> </Link>

          {user ? <button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' onClick={signedOut}><VscSignOut /></button> : <Link to="/login"><button className='sm:mx-3 mx-1 my-3 px-3 text-2xl font-bold text-white' ><AiOutlineLogin /></button></Link>}
        </div>





        {/* category and subcategories for desktop*/}

        <li className='group text-white list-none md:hidden'>Category
         <div className='hidden group-hover:block group fixed bg-pink-500 top-14 left-16 text-center w-44 px-2'>
       
            <ul>

              <li className='group'>Fanions 1

                <ul className='hidden '>

                  <li className=''>Fanions</li>
                  <li className=''>Fanions</li>

                  <li className=''>Fanions</li>

                </ul>

              </li>
              <li>Fanions 2


                <ul className='hidden '>

                  <li className=''>Fanions</li>
                  <li className=''>Fanions</li>

                  <li className=''>Fanions</li>

                </ul>
              </li>

              <li>Fanions 3


                <ul className='hidden '>

                  <li className=''>Fanions</li>
                  <li className=''>Fanions</li>

                  <li className=''>Fanions</li>

                </ul>

              </li>

            </ul>
          </div>
        
        </li>



        {/* <ul className='flex md:hidden justify-center  w-full z-30'>
        <li className='py-1 text-center group text-white mx-5 relative'> <Link to='/category/Women Fashion'>Women's Fashion</Link>

          <div className='-left-11 top-[32px] absolute bg-white pt-[2px]'>
            <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-44 '>
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
            <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-44 '>
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
            <ul className='hidden group-hover:block bg-pink-600 text-white  pt-4 px-2  pb-2 rounded rounded-b-md w-44 '>
              <li className='py-1 text-center'> <Link to='/subCategory/Kids'>Kids</Link></li>
              <li className='py-1 text-center'> <Link to='/subCategory/Laptop'>Laptop</Link></li>
              <li className='py-1 text-center'> <Link to='/subCategory/Luggage'>Luggage</Link></li>
              <li className='py-1 text-center'> <Link to='/subCategory/Travel Bags'>Travel Bags</Link></li>
              <li className='py-1 text-center'> <Link to='/subCategory/Mens Bags'>Mens Bags</Link></li>
              <li className='py-1 text-center'> <Link to='/subCategory/Womens Bags'>Womens Bags</Link></li>

            </ul>
          </div>
        </li>
      </ul> */}




        {/* sidebar for mobile  device */}
        <svg className="md:hidden hover:border-white border-gray-800 mr-4" onClick={() => setDropdown(!dropdown)} width='20px' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

        <div className={dropdown ? 'bg-pink-600  md:hidden fixed sm:top-24 top-14 w-64  text-white z-30 -right-64 transition-all duration-700' : ' bg-pink-600 md:hidden fixed sm:top-24 top-14 w-64 right-0 text-white z-30 transition-all duration-700'} >

          {user && <Link to='dashboard'>  <p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 flex h-10 items-center"><FaRegUser /> <span className='ml-4'>Dashboard</span> </p></Link>}
          <Link to='/'><p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 flex h-10 items-center"><AiOutlineHome /> <span className='ml-4'>Home </span></p></Link>
          <Link to='/cart'><p className=" border hover:border-white px-2 mx-2 border-pink-700  my-2 flex h-10 items-center"><AiOutlineShoppingCart /> <span className='ml-4'>Cart<sup>{value.countCartProducts}</sup></span></p></Link>

          {user ? <button className='border hover:border-white px-2 mx-2 border-pink-700  my-2 flex h-10 items-center w-full' onClick={signedOut}><VscSignOut /><span className='ml-4'>Logout</span></button> : <Link to="/login"><button className='border hover:border-white px-2 mx-2 border-pink-700  my-2 flex h-10 items-center w-full' ><AiOutlineLogin /> <span className='ml-4'>Login</span></button></Link>}

        </div>





      </div>


      {/* category and subcategories */}



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




export default Navbar