import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import FoodPopup from './components/FoodPopup/FoodPopup'

function App() {
  const [showLogin,setShowLogin]=useState(false)
  const [showFood,setShowFood]= useState(-1)
  return (
    <>
    {(showFood+1)?<FoodPopup showFood={showFood} setShowFood={setShowFood}/>:<></>}
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home showFood={showFood} setShowFood={setShowFood} />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
      <Footer/>
      </>
  )
}

export default App
