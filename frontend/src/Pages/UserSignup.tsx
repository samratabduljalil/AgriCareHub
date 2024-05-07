import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from '../Component/Navbar'
const UserSignup = () => {
    const [Phone, setPhone] = useState('');
    const [Name, setName] = useState('');
    const [District, setDistrict] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();;
    axios.defaults.withCredentials = true;



    useEffect(() => {

        axios.get('http://localhost:2000/AuthUser')
            .then(res => {

                if (res.data.Status === "Success") {
                    navigate('/UserDashboard')

                } else {



                }



            })


    }, [])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2000/signup', {
                Phone,
                Name,
                District,
                Password

            });

            console.log(response.data); // Handle successful submission
            setPhone('');
            setName('');
            setDistrict('');
            setPassword('');
            alert("signup Successfully")
            navigate('/UserLogin')

        } catch (error) {
            console.error(error);
            // Handle form submission errors
        }
    };

    return (<>
        <div className="main_med_s">
            <Navbar />
            <div className="card_container_med_s">
                <div className="card_contain_med_s">
                    <div className="card_med_s">
                        <h1 className='Up_title_s'>এ্যাকাউন্ট তৈরি করুন</h1>
                        <form onSubmit={handleSubmit}>


                            <input className='UP_in_box_s' type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='আপনার নাম ইংরেজিতে লিখুন' />

                            <input className='UP_in_box_s' type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder='আপনার মোবাইল নম্বর ইংরেজিতে লিখুন' />

                            <input className='UP_in_box_s' type="text" value={District} onChange={(e) => setDistrict(e.target.value)} placeholder='আপনার জেলা ইংরেজিতে লিখুন' />
                            <input className='UP_in_box_s' type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='আপনার  পাসওয়ার্ড ইংরেজিতে লিখুন' />
                            <br></br>
                            <button className='UP_btn_submit_s' type="submit">সাইনআপ</button>
                            <p>আপনার এ্যাকাউন্ট খোলা আছে?  <NavLink to="/UserLogin" className="text-green-800 text-2xl"> প্রবেশ করুন </NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UserSignup;
