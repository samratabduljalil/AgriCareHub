import { useState } from 'react'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Modal from './Component/Modal'
import Home from './Pages/Home'

function App() {
  const [showModal, setShowModal] = useState(true)

  return (
    <>

      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
      {showModal && <Modal onClose={() => setShowModal(false)} />}


    </>
  )
}

export default App
