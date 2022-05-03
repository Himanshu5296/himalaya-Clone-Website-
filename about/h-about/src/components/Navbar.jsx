import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <>
      <div style={{ backgroundColor: "white", justifyContent: "space-evenly", color:"white",display:"flex" }}>



          <div className='c'><Link to="/ourstory">OUR STORY</Link></div>
          <div className='c'><Link to="/ourroot">OUR ROOT</Link></div> 
          <div className='c'><Link to="/ourprocess">OUR PROCESS</Link></div> 
          <div className='c'><Link to="/ourscience">OUR SCIENCE</Link></div>
          <div className='c'><Link to="/ourourinti">OUR INITIATIVES</Link></div> 
         
          
            </div>
            <div><hr className='solid'></hr></div>
     </>
     
  )
}

export default Navbar