import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'

function App() {
  
  return (
    <>
     <Navbar></Navbar>
     <Home/>
     <Footer></Footer>
     
    </>
  )
}

export default App
