
import Navbar from './share/navbar/Navbar'
import Footer from './share/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Item from './pages/Item'
import ManageInventory from './pages/ManageInventory'

import Login from './pages/Login';
import SignUp from './pages/SingUp';
import RequireAuth from './pages/RequireAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './pages/MyItems';
function App() {

  return (

    <div>
      <Navbar />
      <div className='sm:px-2 sm:pt-[120px] pt-[80px] min-h-[550px]'>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/manageInventory' element={<ManageInventory />} />

            <Route path='/item/:id' element={<RequireAuth><Item /></RequireAuth>} />
            <Route path='/myItems' element={<RequireAuth><MyItems /></RequireAuth>} />


            <Route path='login' element={<Login />} />
            <Route path='signUp' element={<SignUp />} />
       
      
          </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>

  )
}

export default App
