import React, { useState } from 'react';
import axios from 'axios';
import './UpMedication.css';
import Sidebar from '../Component/sidebar';


const UpdateMedication = () => {
    const [Disease_Name, setDisease_Name] = useState('');
    const [Medication_in_bangla, setMedication_in_bangla] = useState('');
    const [Medicine_name, setMedicine_name] = useState('');
    const [Disease, setDisease] = useState('');




    const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2000/search', {
                Disease
            });

            console.log(response.data); // Handle successful submission
            setDisease_Name(response.data[0].Disease_name);
            setMedication_in_bangla(response.data[0].Medication);
            setMedicine_name(response.data[0].Medicine_name);
           

        } catch (error) {
            console.error(error);
            // Handle form submission errors
        }
    };





    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2000/updatemedication', {
                Disease_Name,
                Medication_in_bangla,
                Medicine_name
            });

            console.log(response.data); // Handle successful submission
            setDisease_Name('');
            setMedication_in_bangla('');
            setMedicine_name('');
            alert("Update Medication  Sucessefully")

        } catch (error) {
            console.error(error);
            // Handle form submission errors
        }
    };

    return (<>
        <div className="main_med">
            <Sidebar />
            <div className="card_container_med">
                <div className="card_contain_med">
                    <div className="card_med">
                        <h1 className='Up_title'>Insert Medicine details</h1>
                        <form className='search_form' onSubmit={handleSubmit2}>

                        <input value={Disease} onChange={(e) => setDisease(e.target.value)} className='search' type="search" name="" id="" placeholder='search' />
                        <button className='btn_search' type="submit">Search</button>

                        </form>
                        <form onSubmit={handleSubmit} className='search_form2'>


                            <input className='UP_in_box' placeholder='Enter Disease Name' type="text" value={Disease_Name} onChange={(e) => setDisease_Name(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Medication in bangla' type="text" value={Medication_in_bangla} onChange={(e) => setMedication_in_bangla(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Medicine name in bangla' type="text" value={Medicine_name} onChange={(e) => setMedicine_name(e.target.value)} />
                            <br></br>
                            
                            <button className='UP_btn_submit' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UpdateMedication;
