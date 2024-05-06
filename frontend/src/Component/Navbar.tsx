import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {


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









    return (<>

        <nav className=" nav_color fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-6 ">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="h-8 w-8" src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="Logo" />

            </div>

            {/* Navbar Items */}
            <div className="flex-grow text-center">
                <ul className="flex justify-center space-x-4">
                    <li><NavLink to="/" className="nav_btn">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav_btn" >About</NavLink></li>
                    <li><NavLink to="/UserSignup" className="nav_btn">Service</NavLink></li>
                    {
                        auth ?
                            <div>
                                <li> <li><NavLink to="/UserDashboard" className="nav_btn">Dashboard</NavLink></li>
                                </li>
                            </div>
                            :
                            <div>
                                <NavLink to="/services" className="nav_btn">Services</NavLink>
                            </div>



                    }


                </ul>
            </div>

        </nav>

    </>
    );
}

export default Navbar;
