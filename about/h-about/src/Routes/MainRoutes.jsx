import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import OurRoots from '../components/OurRoots'
import OurStory from '../components/OurStory'

const MainRoutes = () => {
    return (
      <>
        <div className='m'>
          Our Story
        
        </div>
      
            <Navbar />
            <Routes>
                <Route>
            <Route path='OurStory' element={<OurStory />} />
             <Route path='Ourroots' element={<OurRoots />} />
           
                </Route>
            </Routes>





</>
  )
}

export default MainRoutes