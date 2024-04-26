import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div className='text-white'>
      <h2>Upload Image</h2>
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
  );
};

export default UploadImage;
