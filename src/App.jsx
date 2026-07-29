import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HotelDetails from './pages/HotelDetails'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

export const backendUrl = 'http://localhost:4000'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/room/:id' element={<HotelDetails/>} />  {/* Add colon before id */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App