import {} from '@mui/material'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'

function Header() {
   useEffect(() =>{
    const toggleMenu = document.querySelector(".toggleMenu")
    toggleMenu.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active")
    })
   })
  return (
    <header>
        <img src='/logo-dark-yellow.jpg' alt='' className='logo'/>
        <div className='inputBox'>
         <SearchRounded className='searchIcon'/>
         <input type='text' placeholder='Search'/>
        </div>
        <div className='shoppingCart'>
            <ShoppingCartRounded className='cart'/>
            <div className='cart-content'>
                <p>2</p>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='imgBox'>
                <img src='/profile.jpg' alt='Profile' className='profilePic'/>
            </div>
            <h2 className='userName'>Viannie</h2>
        </div>
        <div className='toggleMenu'>
            <BarChart className='toggleIcon'/>
        </div>
    </header>
  )
}

export default Header