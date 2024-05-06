import './home.css';
import { NavLink } from 'react-router-dom';

import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
import axios from "axios";
import { useEffect, useState } from "react";

type TawkAPIType = {
  [key: string]: any;
};



function Home() {

  const [auth, setAuth] = useState(false)

  axios.defaults.withCredentials = true;

  useEffect(() => {

    axios.get('http://localhost:2000/AuthUser')
      .then(res => {

        if (res.data.Status === "Success") {
          setAuth(true);


        } else {
          setAuth(false);

        }



      })


  }, [])






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
          <img src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="" className='home_image' />
          <p className='card_text'>আপনার ফসলের রোগ নির্ণয় করতে চাইলে 'ছবি নির্বাচন করুন' বোতামে চাপ দিন</p>
          {

            auth ?
              <div>
                <NavLink to="/ChoseCrop" ><button className="btn_upload">ছবি নির্বাচন করুন</button></NavLink>

              </div>

              :
              <div>
                <button onClick={() => setShowModal(true)} className="btn_upload">ছবি নির্বাচন করুন</button>
              </div>

          }









        </div>



      </div>


      <Footer></Footer>
      {showModal && !auth && <Modal onClose={() => setShowModal(false)} />}


    </>
  )


}
export default Home