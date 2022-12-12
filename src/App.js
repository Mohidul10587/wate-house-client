
import Navbar from './share/navbar/Navbar'
import Footer from './share/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {

  return (

    <div>
      <Navbar />
      <div className='sm:px-2 sm:pt-[120px] pt-[80px] min-h-[550px]'>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />

       
            {/* <Route path='checkout' element={<RequireAuth><Checkout /></RequireAuth>} /> */}

            {/* <Route path='dashboard' element={<RequireAuth><Dashboard /> </RequireAuth>}>
              <Route index='profile' element={<Profile></Profile>}></Route>
              <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
              <Route path='AllOrders' element={<RequireAdmin><Orders /></RequireAdmin>}></Route>
              <Route path='form' element={<RequireAdmin><Form /></RequireAdmin>}></Route>
              <Route path='allUser' element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
            </Route> */}
          </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App
