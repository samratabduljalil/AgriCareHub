import './home.css';
import {NavLink} from 'react-router-dom';
import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
function Home (){

const [showModal, setShowModal] = useState(true)

return (
  <>

    <Navbar></Navbar>
    
    <div className="hero">

   <div className="card">
    <p className='card_text'>আপনার ফসলের রোগ নির্ণয় করতে চাইলে বোতামে চাপ দিন।  কিভাবে করবেন জানতে চাইলে বোতামে চাপ দিন।</p>
   <button className="btn_upload"><NavLink to="/Medication">upload</NavLink></button>
    <button className="btn_demo"><NavLink to="/Demo">Demo</NavLink></button>
    

   </div>
     
    
    
    </div>

    
    <Footer></Footer>
    {showModal && <Modal onClose={() => setShowModal(false)} />}


  </>
)
    
    
    }
export default Home