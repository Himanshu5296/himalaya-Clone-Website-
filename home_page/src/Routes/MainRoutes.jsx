import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../components/HOME_PAGE/Home/Home'
import Navbar from '../components/HOME_PAGE/NAVBAR/Navbar'
import Footer from '../Footer/Footer'
import { Category } from '../product components/Category';
import { Cart } from '../product components/Cart';
import { Address } from '../PaymentCard/Address'
import { PaymentCard } from '../PaymentCard/PaymentCard';
import Register from '../SignIn/Register'
import SignIn from '../SignIn/SignIn'
import { Products } from '../product components/Products'
import Success from '../PaymentCard/Success'
import Login from '../SignIn/Login'
import OTPPAGE from '../PaymentCard/OTPPAGE'
const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Shop/*' element={<Products/>}/>
        <Route path='/:HerbalSupplements' element={<Category/>}/>
        <Route path='/:HealthInterests' element={<Category/>}/>
        <Route path='/:OralCare' element={<Category/>}/>
        <Route path='/:PersonalCare' element={<Category/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/address/*" element={<Address/>}/>
        <Route path="/payment" element={<PaymentCard/>}/>
        <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/otp' element={<OTPPAGE/>}></Route>
        {/* <Route path='/' element={<Shop/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoutes