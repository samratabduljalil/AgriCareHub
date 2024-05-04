import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import Sidebar from '../Component/sidebar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";



const Login = () => {
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const navigate =useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(()=>{

        axios.get('http://localhost:2000/Auth')
        .then(res=>{
        
        if(res.data.Status==="Success"){
            navigate('/Admin') 
        
        }
        
        
        
        })
        
        
        },[])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2000/login', {
                Phone,
                Password

            });

            console.log(response.data); // Handle successful submission
            setPhone('');
            setPassword('');


            if(response.data.Status === "Success"){

                navigate('/AdminDashboard') 
                alert("login Successfully")

            }else{
                alert(response.data)

            }
           

        } catch (error) {
            console.error(error);
            // Handle form submission errors
        }
    };

    return (<>
        <div className="main_med_s">
          
            <div className="card_container_med_s">
                <div className="card_contain_med_s">
                    <div className="card_med_s">
                        <h1 className='Up_title_s'>Create account</h1>
                        <form onSubmit={handleSubmit}>


                           

                            <input className='UP_in_box_s' type="email" value={Phone} onChange={(e) => setPhone(e.target.value)}  required/>
                            <input className='UP_in_box_s' type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
                            <br></br>
                            <button className='UP_btn_submit_s' type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;
