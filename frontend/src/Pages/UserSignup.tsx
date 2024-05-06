import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

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


                            <input className='UP_in_box_s' type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='' />

                            <input className='UP_in_box_s' type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder='' />

                            <input className='UP_in_box_s' type="text" value={District} onChange={(e) => setDistrict(e.target.value)} placeholder='' />
                            <input className='UP_in_box_s' type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='' />
                            <br></br>
                            <button className='UP_btn_submit_s' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UserSignup;
