import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Items } from './Data'
import { useStateValue } from './StateProvider';

let cartData = []
let actionType = []

function ItemCard({imgSrc, name, ratings, price, itemId}) {
    const [isFavorite, setFavorite] = useState(false)
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
    const [isCart, setCart] = useState(null) 
    const [{}, dispatch] = useStateValue()
    useEffect(() =>{
        if(isCart){
          cartData.push(isCart)
          dispatch({
            type: actionType.SET_CART,
            cart: cartData,
          })  
        }
    })  
    const handleClick = (value) => {
        setCurrentValue(value)
    }
  return (
    <div className='itemCard' id={itemId}>
        <div className={`isFavorite ${isFavorite ? 'active' : ""}`}
        onClick={() => setFavorite(!isFavorite)}
        >
            <Favorite/>  
        </div>
        <div className='imgBox'>
            <img src={imgSrc} alt='' className='itemImg'/>
        </div>
        <div className='itemContent'>
             <h3 className='itemName'>{name}</h3>
            <div className='bottom'>
                <div className='ratings'>
                    {Array.apply(null, {length : 5}).map((e, i) =>(
                        <i key={i} className={`rating ${currentValue > i ? "orange" : 'gray'}`}
                        onClick={() => handleClick(i + 1)}
                        >
                            <StarRounded/>
                        </i>
                    ))}
                    <h3 className='price'><span>$ </span>{price}</h3>
                </div>
                <i className='addToCart' onClick={ () => setCart(Items.find(n => n.id === itemId))}>
                    <AddRounded/>
                </i>
            </div>  
        </div>
    </div>
  )
}

export default ItemCard