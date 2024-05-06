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
  const [Data,setData]= useState([])
  
  
  axios.defaults.withCredentials = true;
  
  useEffect(()=>{
  
  axios.get('http://localhost:2000/Auth')
  .then(res=>{
  
  if(res.data.Status==="Success"){
   setAuth(true);
   
  
  }else{
      setAuth(false);
      navigate('/AdminLogin')
  
  }
  
  
  
  })
  
  
  },[])



  useEffect(()=>{
  
    axios.get('http://localhost:2000/district_data')
    .then(res=>{
      setData(res.data)
    
    
    })
    
    
    },[])




  return (<> {
    auth ?
    <>
    <div className="body">
    <Sidebar />

    <div className="card_container">
     
    <table className="data-table">
                <thead>
                    <tr>
                        <th>Row Number</th>
                        <th>District</th>
                        <th>Disease Name</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td> {/* Adding row number */}
                            <td>{row.District_Name}</td> {/* Assuming 'district' is a field in your API response */}
                            <td>{row.Disease_Name}</td> {/* Assuming 'disease_name' is a field in your API response */}
                            <td>{row.count}</td> {/* Assuming 'count' is a field in your API response representing the count */}
                        </tr>
                    ))}
                </tbody>
            </table>

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
