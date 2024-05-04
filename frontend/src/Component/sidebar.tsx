import React from 'react';
import axios  from "axios";
import './sidebar.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {



    const logout =()=>{
        axios.get('http://localhost:2000/logout')
        .then(res=>{
        
        if(res.data.Status === "Succcess"){
         location.reload();
         
        }}).catch(err =>console.log(err))
    
    }
    



    return (<>
        <div className="sidebar">

            <img src="./src/assets/imh.png" alt="" className='profile_image' />


            <ul className='ul'>
                <li className='li'><NavLink to="/">Home</NavLink></li>
                <li className='li'><NavLink to="/">Upload Medication details</NavLink></li>
                <li className='li'><NavLink to="/UpMedication">Insert Medication details</NavLink></li>
                <li className='li' onClick={logout}><NavLink to="/" >Logout </NavLink></li>
                


            </ul>



        </div>



    </>

    );
};

export default Sidebar;