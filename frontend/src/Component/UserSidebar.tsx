import './sidebar.css';

import React from 'react';
import axios from "axios";
import './sidebar.css';
import { NavLink } from 'react-router-dom';
function UserSidebar() {



    const logout = () => {
        axios.get('http://localhost:2000/logoutuser')
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
                <li className='U_btn'><NavLink to="/" >Home</NavLink></li>

                <NavLink to="/ChoseCrop" ><li className='U_btn'>Upload</li></NavLink>

                <li className='U_btn' onClick={logout}><NavLink to="/" >Logout </NavLink></li>


            </ul>



        </div>



    </>
    )



}
export default UserSidebar