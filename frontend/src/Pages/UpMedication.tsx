import React, { useState } from 'react';
import axios from 'axios';
import './UpMedication.css';
import Sidebar from '../Component/sidebar';


const UpMedication = () => {
    const [Disease_Name, setDisease_Name] = useState('');
    const [Medication_in_bangla, setMedication_in_bangla] = useState('');
    const [Medicine_name, setMedicine_name] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();
      formData.append('audio', selectedFile);
      formData.append('Disease_Name', Disease_Name);
      formData.append('Medication_in_bangla', Medication_in_bangla);
      formData.append('Medicine_name', Medicine_name);
            const response = await axios.post('http://localhost:2000/insert', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data); // Handle successful submission
            setDisease_Name('');
            setMedication_in_bangla('');
            setMedicine_name('');
            setSelectedFile(null);
            alert("Insert Sucessefully")

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
                        <form onSubmit={handleSubmit}>


                            <input className='UP_in_box' placeholder='Enter Disease Name' type="text" value={Disease_Name} onChange={(e) => setDisease_Name(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Medication in bangla' type="text" value={Medication_in_bangla} onChange={(e) => setMedication_in_bangla(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Medicine name in bangla' type="text" value={Medicine_name} onChange={(e) => setMedicine_name(e.target.value)} />
                            <input type="file" onChange={handleFileChange} className='UP_in_box' />
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

export default UpMedication;
