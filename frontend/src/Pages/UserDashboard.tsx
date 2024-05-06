import './UserDashboard.css';
import UserSidebar from '../Component/UserSidebar';
import React from 'react';

import axios  from "axios";
import { useEffect, useState } from "react";

import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';

function UserDashboard(){

   const navigate =useNavigate();
   const [auth,setAuth]=useState(false)
   const [user_id,setUser_id]= useState('')
   
   axios.defaults.withCredentials = true;
   
   useEffect(()=>{
   
   axios.get('http://localhost:2000/AuthUser')
   .then(res=>{
   
   if(res.data.Status==="Success"){
    setAuth(true);
    setUser_id(res.data.user_id)
   
   }else{
       setAuth(false);
       navigate('/UserLogin')
   
   }
   
   
   
   })
   
   
   },[])






    return(<>
    <div className="body_user">
    <UserSidebar/>
    <div className="user_container">
   <div className="user_contain">

   <div className="User_card">

   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo.</h1>



   </div>
<div className="User_card">

<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo.</h1>


</div>

   </div>


    </div>
  







    </div>
    </>
    ) 
    
    
    
    }
    export default UserDashboard