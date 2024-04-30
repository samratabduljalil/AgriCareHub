import './UpMedication.css';
import React, { useState } from 'react';
import axios from 'axios';
import { FormEvent, ChangeEvent } from 'react';
import Sidebar from '../Component/sidebar';

function UpMedication() {
    const [formData, setFormData] = useState({
        Disease_Name: '',
        Medication_in_bangla: '',
        Medicine_name: '',
        
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:2000/updatemedication', formData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (<>

        <div className="main_med">
            <Sidebar />
            <div className="card_container_med">
                <div className="card_contain_med">
                    <div className="card_med">
                        <form onSubmit={handleSubmit}>

                        <input type="text" name="Disease_Name" id="" placeholder='Disease Name' value={formData.Disease_Name} onChange={handleChange}/>
                        <input type="text" name="Medication_in_bangla" id="" placeholder='Medication in bangla' value={formData.Medication_in_bangla} onChange={handleChange} />
                        <input type="text" name="Medicine_name" id="" placeholder='Medicine name' value={formData.Medicine_name} onChange={handleChange} />
                        <button type="submit">submit</button>


                        </form>

                    </div>

                </div>




            </div>
        </div>

    </>
    )



}
export default UpMedication