import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './choseCrop.css';
import Navbar from '../Component/Navbar'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer'

const Corn = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [PredictionResult, setPredictionResult] = useState('');
    const [data, setData] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [user_id, setUser_id] = useState('')
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {

        axios.get('http://localhost:2000/AuthUser')
            .then(res => {

                if (res.data.Status === "Success") {
                    setAuth(true);
                    setUser_id(res.data.user_id)

                } else {
                    setAuth(false);
                    navigate('/UserLogin')

                }



            })


    }, [])
    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        const audio = document.getElementById('audio') as HTMLAudioElement;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('http://localhost:8000/predictWheat', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const prediction = response.data.class;
            setPredictionResult(prediction);

            console.log('Prediction:', prediction);

            const response2 = await axios.post('http://localhost:2000/data', {
                prediction // Pass prediction to server
            });
            setData(response2.data)
            console.log(response2.data);

            const response3 = await axios.post('http://localhost:2000/history', {
                prediction, user_id // Pass prediction to server
            });



        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (<>
        <Navbar />
        <div className="Crop_body">

            <div className="Crop_card">

                <h1 className='chose_h1'>আপনার রোগাক্রান্ত ফসলের রোগ নির্ণয়ের জন্য সাদা রঙের বোতামে চাপ দিয়ে ছবি পছন্দ করুন তারপর রোগ নির্ণয় লিখা বোতামে চাপ দিন। </h1>



                <input type="file" id="fileInput" name="fileInput" accept=".jpg, .jpeg, .png" className='text-white rounded-sm' onChange={handleFileChange} />
                <button className='btn_image_up' onClick={handleUpload}>রোগ নির্ণয়</button>
                {data && (
                    <div className='prompt_div'>
                        <h3>রোগের নাম:{data[0].Disease_name_bangla}</h3>
                        <h3>ঔষধের নাম: {data[0].Medicine_name}</h3>
                        <p>ব্যবহার বিধি: {data[0].Medication}</p>





                        <button className="btn_play" onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
                        <audio id="audio" src={'http://localhost:2000/' + data[0].audio_file} />


                    </div>




                )}


            </div>




        </div>




        <Footer />
    </>



    );
};

export default Corn;
