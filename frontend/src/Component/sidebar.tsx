import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (<>
        <div className="sidebar">

            <img src="./src/assets/imh.png" alt="" className='profile_image' />


            <ul className='ul'>
                <li className='li'>Home</li>
                <li className='li'>Upload Medication</li>
                <li className='li'>Upload New Model</li>
                <li className='li'>maintain history</li>


            </ul>



        </div>



    </>

    );
};

export default Sidebar;