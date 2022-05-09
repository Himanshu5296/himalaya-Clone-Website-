import React from 'react'
import "./navbar.css"
import X from '../../Images/X.jpg'

const Toggle = () => {
  return (
    <div className='side-bar'>
      <div className='close-div'>
        <img src={X} alt="" className='close-icon'/>
        <p>Close</p>
      </div>
      <div className='nav-data'>
        <p>Shop</p>
        <p>About</p>
        <p>Store Locator</p>
      </div>
      <hr className='hr'/>
      <div className='account-data'>
        <h3>My Account</h3>
        <p>Sign in</p>
        <p>Register</p>
        <p>Checkout</p>
      </div>
    </div>
  )
}

export default Toggle