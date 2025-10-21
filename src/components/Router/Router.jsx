import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Services from '../../pages/Services'

const Router = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Services' element={<Services/>}/>

    </Route>
   </Routes>
    </div>
  )
}

export default Router
