import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisply from '../../components/FoodDisplay/FoodDisply'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'
import FoodPopup from '../../components/FoodPopup/FoodPopup'
const Home = ({showFood,setShowFood}) => {
    
    const [category,setCategory] = useState('all')
  return (
    <div>
        
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisply setShowFood={setShowFood} showFood={showFood} category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
