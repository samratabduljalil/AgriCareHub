import React from 'react';
import './admin.css';
import axios  from "axios";
import { useEffect, useState } from "react";
import Sidebar from '../Component/sidebar';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate =useNavigate();
  const [auth,setAuth]=useState(false)
  const [admin_id,setAdmin_id]= useState('')
  
  axios.defaults.withCredentials = true;
  
  useEffect(()=>{
  
  axios.get('http://localhost:2000/Auth')
  .then(res=>{
  
  if(res.data.Status==="Success"){
   setAuth(true);
   setAdmin_id(res.data.admin_id)
  
  }else{
      setAuth(false);
      navigate('/AdminLogin')
  
  }
  
  
  
  })
  
  
  },[])



  return (<> {
    auth ?
    <>
    <div className="body">
    <Sidebar />

    <div className="card_container">
      <div className="card_contain">


        <div className="card">


        </div>
        <div className="card">


        </div>
        <div className="card">


        </div>
        <div className="card">


        </div>



      </div>


    </div>









  </div>
  <Footer />
  
  </>
  
  :
  <>{navigate('/AdminLogin') }</>
  
  
  }
   
  </>
  );
};


export default Admin;
