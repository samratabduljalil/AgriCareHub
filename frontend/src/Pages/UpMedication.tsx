import React, { useState } from 'react';
import axios from 'axios';

const UpMedication = () => {
  const [Disease_Name, setDisease_Name] = useState('');
  const [Medication_in_bangla, setMedication_in_bangla] = useState('');
  const [Medicine_name, setMedicine_name] = useState('');

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

    } catch (error) {
      console.error(error);
      // Handle form submission errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Disease_Name:
        <input type="text" value={Disease_Name} onChange={(e) => setDisease_Name(e.target.value)} />
      </label>
      <label>
      Medication_in_bangla:
        <input type="text" value={Medication_in_bangla} onChange={(e) => setMedication_in_bangla(e.target.value)} />
      </label>
      <label>
      Medicine_name:
        <input type="text" value={Medicine_name} onChange={(e) => setMedicine_name(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpMedication;
