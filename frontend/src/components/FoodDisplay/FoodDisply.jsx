import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisply = ({category,setShowFood}) => {
    const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h1>{category==='all'?'Top dishes near you':category}</h1>
        <div className="food-display-list">
        {food_list.map((item,index)=>{
            if(category==='all'||category===item.category){
            return <FoodItem setShowFood={setShowFood} key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
        </div>
    </div>
  )
}

export default FoodDisply
