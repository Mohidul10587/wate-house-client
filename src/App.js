
import Navbar from './share/navbar/Navbar'
import Footer from './share/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Inventory from './pages/Inventory'
import ManageInventory from './pages/ManageInventory'

import Login from './pages/Login';
import SignUp from './pages/SingUp';
import RequireAuth from './pages/RequireAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './pages/MyItems';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword'
function App() {

  return (

    <div>
      <Navbar />
      <div className=' sm:pt-[100px] pt-[80px] min-h-[550px]'>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='resetPassword' element={<ResetPassword />} />
            <Route path='/manageInventory' element={<ManageInventory />} />

            <Route path='/inventory/:id' element={<RequireAuth><Inventory /></RequireAuth>} />
            <Route path='/myItems' element={<RequireAuth><MyItems /></RequireAuth>} />


            <Route path='login' element={<Login />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
      
          </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>

  )
}

export default App
