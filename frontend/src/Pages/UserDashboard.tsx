import './UserDashboard.css';
import UserSidebar from '../Component/UserSidebar';
import React from 'react';

import axios  from "axios";
import { useEffect, useState } from "react";

import Footer from '../Component/Footer';
import { useNavigate ,NavLink } from 'react-router-dom';

function UserDashboard(){

   const navigate =useNavigate();
   const [auth,setAuth]=useState(false)
   const [user_id,setUser_id]= useState('')
   const [Data,setData]= useState([])
   
   axios.defaults.withCredentials = true;
   var id=0;
   useEffect(()=>{
   
   axios.get('http://localhost:2000/AuthUser')
   .then(res=>{
   
   if(res.data.Status==="Success"){
    setAuth(true);
    setUser_id(res.data.user_id)
   id = res.data.user_id
   }else{
       setAuth(false);
       navigate('/UserLogin')
   
   }
   
   
   
   })
   
   
   },[])

   useEffect(()=>{
       console.log(user_id)
      axios.post('http://localhost:2000/historytable', { user_id: 1 })
      .then(res=>{
      
      setData(res.data)
      console.log(res.data)
      
      
      
      
      })
      
      
      },[])


    








    return(<>
    <div className="body_user">
    <UserSidebar/>
    <div className="user_container">
   <div className="user_contain">

   <div className="User_card">

   <h1>News</h1>



   </div>
<div className="User_card">


<table className="data-table">
        <thead>
          <tr>
            <th>History ID</th>
            <th>User ID</th>
            <th>District Name</th>
            <th>Disease Name</th>
            <th>Date</th>
            <th>Actions</th> {/* Add a column for actions */}
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td>{item.History_ID}</td>
              <td>{item.User_ID}</td>
              <td>{item.District_Name}</td>
              <td>{item.Disease_Name}</td>
              <td>{item.Date}</td>
              <td>
              <NavLink to={`/details/${item.Disease_Name}`} className="ta_btn">Details</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


</div>

   </div>


    </div>
  







    </div>
    </>
    ) 
    
    
    
    }
    export default UserDashboard