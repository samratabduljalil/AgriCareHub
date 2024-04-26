import './home.css';
import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
function Home (){

const [showModal, setShowModal] = useState(true)

return (
  <>

    <Navbar></Navbar>
    
    <div className="x-100 y-160 bg-gray-200 ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">upload</button>
      <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">Demo</button>
    </div>

    
    <Footer></Footer>
    {showModal && <Modal onClose={() => setShowModal(false)} />}


  </>
)
    
    
    }
export default Home