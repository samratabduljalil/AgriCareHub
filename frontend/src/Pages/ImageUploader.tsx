import React, { useState } from 'react';
import axios from 'axios';
import './choseCrop.css';
import Navbar from '../Component/Navbar'
import {NavLink} from 'react-router-dom';
import Footer from '../Component/Footer'

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPredictionResult(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (<>
    <Navbar/>
    <div className="Crop_body">
    
    <div className="Crop_card">
    
        <h1 className='chose_h1'>আপনি কোন ধরনের ফসলের রোগ নির্ণয় করতে চান?</h1>
       
        <button className='btn_rice'><NavLink to="/ChoseCrop">ধান</NavLink></button>
       
        <input type="file" onChange={handleFileChange} />
      <button className='bg-green-600' onClick={handleUpload}>Upload</button>
      {predictionResult && (
        <div>
          <h3>Prediction:</h3>
          <p>Class: {predictionResult.class}</p>
          <p>Confidence: {predictionResult.confidence}</p>

        </div>




        )}

        
    </div>
    
    
    
    
    </div>
    
    
    
        
        <Footer/>
        </>


   
  );
};

export default UploadImage;
