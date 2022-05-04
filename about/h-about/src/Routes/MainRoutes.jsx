import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import OurRoots from '../components/OurRoots'
import OurStory from '../components/OurStory'
import OurProcess from "../components/OurProcess"
import OurScience from "../components/OurScience"
// import OurP from '../components/OurP'
import OurInti from '../components/OurInti'

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
            <Route path='ourprocess' element={<OurProcess />} />
            <Route path='ourscience' element={<OurScience />} />
            <Route path='ourourinti'element={<OurInti/>}/>
           
                </Route>
            </Routes>





</>
  )
}

export default MainRoutes