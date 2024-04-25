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
    


    
    <Footer></Footer>
    {showModal && <Modal onClose={() => setShowModal(false)} />}


  </>
)
    
    
    }
export default Home