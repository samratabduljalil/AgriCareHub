import './home.css';
import {NavLink} from 'react-router-dom';
import { useState ,useEffect} from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'

type TawkAPIType = {
  [key: string]: any;
};
function Home (){
  useEffect(() => {
    // This code will run when the component mounts
    var Tawk_API: TawkAPIType = (window as any).Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6636303807f59932ab3bffaf/1ht1qontq';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

const [showModal, setShowModal] = useState(false)

return (
  <>

    <Navbar></Navbar>
    
    <div className="hero">

   <div className="card_h">
    <img src="http://localhost:2000/0a8a68ee-f587-4dea-beec-79d02e7d3fa4___RS_Early.JPG" alt="" className='home_image' />
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