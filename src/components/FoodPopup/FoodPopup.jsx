import React, { useContext, useEffect } from 'react'
import './FoodPopup.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
const FoodPopup = ({setShowFood,showFood}) => {
    const {food_list} = useContext(StoreContext)
    const currentFood = food_list.filter((food)=>food._id===showFood)
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)
    useEffect(()=>{
        // console.log(currentFood[0].name)
    //     console.log(showFood)
    },[showFood])
    const {name,description,price,image} = currentFood[0]
  return (
    <div className='food-popup'>
        
        <div className='food-popup-container'>
            <img className='food-popup-image' src={image} alt="" />
            <div className="food-popup-details">
                <img className='food-popup-cross' onClick={()=>setShowFood(-1)} src={assets.cross_icon} alt="" />
                <h1 className="food-popup-name">{name}</h1>
                <img src={assets.rating_starts} className="food-popup-rate"></img>
                <p className="food-popup-des">{description}</p>
                <h2 className="food-popup-price">${price}</h2>
                {!cartItem[showFood]?<button onClick={()=>addToCart(showFood)}>Add to cart</button>
                :<div className='food-popup-counter'>
                <img onClick={()=>removeFromCart(showFood)} src={assets.remove_icon_red} alt="" />
                <p>{cartItem[showFood]}</p>
                <img onClick={()=>addToCart(showFood)} src={assets.add_icon_green} alt="" />
            </div>
                }
            </div>
        </div>
        
    </div>
  )
}

export default FoodPopup
