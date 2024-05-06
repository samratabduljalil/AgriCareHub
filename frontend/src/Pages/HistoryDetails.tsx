import './UserDashboard.css';
import UserSidebar from '../Component/UserSidebar';
import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Footer from '../Component/Footer';
import { useNavigate, NavLink } from 'react-router-dom';

function HistoryDetails() {

    const { diseaseName } = useParams();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false)
    const [user_id, setUser_id] = useState('')
    const [Data, setData] = useState([])

    axios.defaults.withCredentials = true;
    var id = 0;



    useEffect(() => {

        axios.get('http://localhost:2000/AuthUser')
            .then(res => {

                if (res.data.Status === "Success") {
                    setAuth(true);
                    setUser_id(res.data.user_id)
                    id = res.data.user_id
                    console.log(diseaseName)
                    axios.post('http://localhost:2000/details', { diseaseName })
                        .then(res => {

                            setData(res.data)
                            console.log(res.data)




                        })
                } else {
                    setAuth(false);
                    navigate('/UserLogin')

                }



            })


    }, [])







    const [isPlaying, setIsPlaying] = useState(false);


    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        const audio = document.getElementById('audio') as HTMLAudioElement;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };


    return (<>
        <div className="body_user">
            <UserSidebar />
            <div className="user_container">
                <div className="user_contain">


                    <div className="User_card">
                        <h1>{
                            Data.map((item, index) => (


                                <tr key={index}>
                                    <h1>রোগের নাম:{item.Disease_name_bangla}</h1>
                                    <h1>ঔষধের নাম:{item.Medicine_name}</h1>
                                    <p>ব্যবহার বিধি:{item.Medication}</p>




                                    <button className="btn_play" onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
                                    <audio id="audio" src={'http://localhost:2000/' + item.audio_file} />

                                </tr>
                            ))}
                        </h1>


                    </div>

                </div>


            </div>








        </div>
    </>
    )



}
export default HistoryDetails