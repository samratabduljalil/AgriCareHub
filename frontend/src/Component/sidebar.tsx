import React from 'react';
import axios from "axios";
import './sidebar.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {



    const logout = () => {
        axios.get('http://localhost:2000/logout')
            .then(res => {

                if (res.data.Status === "Succcess") {
                    location.reload();

                }
            }).catch(err => console.log(err))

    }




    return (<>
        <div className="sidebar">

            <img src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="" className='profile_image' />
            <h2 className='side_logo'>AgriCareHub</h2>


            <ul className='ul'>
                <NavLink to="/"><li className='li'>Home</li></NavLink>
                <NavLink to="/UpMedication"><li className='li'>Insert Medication details</li></NavLink>
                <NavLink to="/UpdateMedication"><li className='li'>Update Medication details</li></NavLink>
                <NavLink to="/DeleteMedication"><li className='li'>Delete Medication Details</li></NavLink>
                <NavLink to="/" > <li className='li' onClick={logout}>Logout</li> </NavLink>



            </ul>



        </div>



    </>

    );
};

export default Sidebar;