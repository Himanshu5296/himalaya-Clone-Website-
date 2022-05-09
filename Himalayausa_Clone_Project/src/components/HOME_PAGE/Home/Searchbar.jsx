import React, { useState } from 'react'
import "./home.css"
import searchBtn from '../../Images/search.png'
import X from '../../Images/X.jpg'

const Searchbar = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <div className={toggle?"search-div":'search-box'}>
        <div className="whatAreYouLookingFor">
            <p> What are you Looking for?</p>
            <img src={X} alt="" className='searchbtn1' onClick={()=>setToggle(false)}/>
        </div>
        <div className="search_button">
            <input type="text"placeholder=" Search products...." className='no-outline'/>
            <img src={searchBtn} alt="" className='searchbtn'/>
        </div>
    </div>
  )
}

export default Searchbar