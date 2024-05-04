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
    
        <h1 className='chose_h1'>আপনার রোগাক্রান্ত ফসলের রোগ নির্ণয়ের জন্য সাদা রঙের বোতামে চাপ দিয়ে ছবি পছন্দ করুন তারপর নির্নয় লিখা বোতামে চাপ দিন। </h1>
       
        
        
        <input type="file"   id="fileInput" name="fileInput" accept=".jpg, .jpeg, .png" className='text-white rounded-sm' onChange={handleFileChange} />
      <button className='btn_image_up' onClick={handleUpload}>Upload</button>
      {predictionResult && (
        <div className='prompt_div'>
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
