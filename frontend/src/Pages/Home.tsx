import './home.css';
import {NavLink} from 'react-router-dom';
import { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
function Home (){

const [showModal, setShowModal] = useState(false)

return (
  <>

    <Navbar></Navbar>
    
    <div className="hero">

   <div className="card_h">
    <img src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="" className='home_image' />
    <p className='card_text'>আপনার ফসলের রোগ নির্ণয় করতে চাইলে বোতামে চাপ দিন।  কিভাবে করবেন জানতে চাইলে বোতামে চাপ দিন।</p>
   <button onClick={()=>setShowModal(true)} className="btn_upload">ছবি নির্বাচন করুন</button>
    
    

   </div>
     
    
    
    </div>

    
    <Footer></Footer>
    {showModal && <Modal onClose={() => setShowModal(false)} />}


  </>
)
    
    
    }
export default Home