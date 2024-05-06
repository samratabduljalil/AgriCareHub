import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import Navbar from '../Component/Navbar'
import Sidebar from '../Component/sidebar';
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const UserLogin = () => {
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const navigate =useNavigate();;
    axios.defaults.withCredentials = true;

    
   
   useEffect(()=>{
   
   axios.get('http://localhost:2000/AuthUser')
   .then(res=>{
   
   if(res.data.Status === "Success"){
    navigate('/UserDashboard')
   
   }else{
       
      
   
   }
   
   
   
   })
   
   
   },[])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2000/userlogin', {
                Phone,
                Password

            });

            console.log(response.data); // Handle successful submission
            setPhone('');
            setPassword('');


            if(response.data.Status === "Success"){

                navigate('/UserDashboard') 
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
          <Navbar/>
          
                    <div className="card_med_s">
                        <h1 className='Up_title_s'>এ্যাকাউন্টে প্রবেশ</h1>
                        <form onSubmit={handleSubmit}>


                           

                            <input className='UP_in_box_s' type="text" value={Phone} onChange={(e) => setPhone(e.target.value)}  placeholder='আপনার মোবাইল নম্বর ইংরেজিতে লিখুন'/>
                            <input className='UP_in_box_s' type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='আপনার  পাসওয়ার্ড ইংরেজিতে লিখুন' />
                            <br></br>
                            <button className='UP_btn_submit_s' type="submit">প্রবেশ</button>
                            <p>আপনার এ্যাকাউন্ট খোলা নেই?   <NavLink to="/UserSignup" className="text-green-700 text-2xl">খুলুন</NavLink></p>
                        </form>
                    </div>
                </div>
            <Footer/>
    </>
    );
};

export default UserLogin;
