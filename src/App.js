// import { useState } from 'react'
import Navbar from './share/navbar/Navbar'
import Home from './pages/home/Home'
import Category from './pages/category/Category';
import ProductDetails from './pages/product_details/ProductDetails'
import Cart from './pages/cart/Cart';
import Login from './pages/authentication/Login';
import { Route, Routes } from 'react-router-dom'
import Form from './pages/admin/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubCategory from './pages/subCategory/SubCategory';
import Checkout from './pages/checkout/Checkout';
import Payment from './pages/payment-getway/Payment';
import SignUp from './pages/authentication/SingUp';
import RequireAuth from './pages/authentication/RequireAuth';
import Footer from './share/footer/Footer';
import Orders from './pages/admin/Orders';
import UserDashboard from './pages/user/UserDashboard';
import Dashboard from './pages/admin/Dashboard';
import AllUser from './pages/admin/AllUser';


function App() {

  return (
    <div>
      <div className='pb-32'>
        <Navbar />
      </div>
      <div className='mx-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category/:categoryName' element={<Category />} />
          <Route path='subCategory/:subCategoryName' element={<SubCategory />} />
          <Route path='productDetails/:productId' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
          <Route path='payment' element={<RequireAuth><Payment /></RequireAuth>} />
          <Route path='userDashboard' element={<RequireAuth><UserDashboard /></RequireAuth>} />
          <Route path='orders' element={<RequireAuth><Orders /></RequireAuth>} />






          <Route path='dashboard' element={<RequireAuth><Dashboard> </Dashboard></RequireAuth>}>
            <Route index='orders' element={<Orders></Orders>}></Route>
            <Route path='form' element={<Form></Form>}></Route>
            <Route path='allUser' element={<AllUser></AllUser>}></Route>

            
          </Route>










        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
