import { useState } from 'react'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Modal from './Component/Modal'
import Home from './Pages/Home'

function App() {
  
  return (
    <>
  
     <Navbar></Navbar>
     <Home/>
     <Footer></Footer>
     <Modal></Modal>
     <h1 className='text-white'>hello</h1>
     
    </>
  )
}

export default App
