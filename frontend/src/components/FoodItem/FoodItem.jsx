import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,description,price,image,setShowFood}) => {
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div onClick={()=>setShowFood(id)} className='food-item'>
      <div  className="food-item-image-container">
        <img src={image} alt="" className="food-item-image" />
        {/* {!cartItem[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
        :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>

        } */}
        {!cartItem[id]?<></>
        :<div className='food-item-num'>{cartItem[id]}</div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
         <p className="food-item-des">{description}</p>
         <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
