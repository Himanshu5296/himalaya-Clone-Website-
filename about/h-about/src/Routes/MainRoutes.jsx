import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import OurStory from '../components/OurStory'

const MainRoutes = () => {
    return (
      <>
            <div>MainRoutes</div>
            <Navbar />
            <Routes>
                <Route>
                 <Route path='OurStory' element={<OurStory />} />
                </Route>
            </Routes>





</>
  )
}

export default MainRoutes