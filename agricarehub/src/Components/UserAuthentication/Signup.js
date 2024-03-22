import React, { useState } from 'react';
import { Link,} from "react-router-dom";
import axios from 'axios';
import "./userAuthentication.css";



const Signup = (props) => {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    gender: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any of the form fields are empty
    if (!formData.username || !formData.email || !formData.gender || !formData.password) {
      setErrorMessage('Please fill out all of the required fields correctly!');
      setSuccessMessage('');
      return;
    }
  
    // Validate email and password
    if (!validateEmail(formData.email) || !validatePassword(formData.password)) {
      setErrorMessage('Invalid email or password!');
      setSuccessMessage('');
      return;
    }
  
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost/agricarehub/signup.php', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data);
      setErrorMessage('');
      setSuccessMessage('Signup successful!');
      setFormData({
        username: '',
        email: '',
        gender: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  


  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Password should have at least 6 characters
    return password.length >= 6;
  };





return (
    <div className="wrapper">
    {errorMessage && <p className='errorMsg'>{errorMessage}</p>}
    {successMessage && <p className='succesMsg'>{successMessage}</p>}
    <form action="#"onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <div className="input-box">
        <input type="text" name="username" placeholder="Username" required="" value={formData.username} onChange={handleChange} />
        <i className="bx bxs-user" />
      </div>

      <div className="input-box">
          <input type="text" name="email" placeholder="Email" value={formData.email}  required="" onChange={handleChange} />
          <i className="bx bxs-envelope" />
        </div>
      
        <div className="input-box">
          <input type="text" name="gender" placeholder="Gender" value={formData.gender} required="" onChange={handleChange} />
          <i className="bx bxs-user-plus" />
        </div>
       

      <div className="input-box">
        <input type="password" name="password" placeholder="Password" value={formData.password} required="" onChange={handleChange} />
        <i className="bx bxs-lock-alt" />
      </div>
      
      <button type="submit" name="submit" className="btn">
        Signup
      </button>
      <div className="register-link">
        <p>
        Already have an account?  <Link to="/login" className="reg">Login</Link>
        </p>
      </div>
    </form>
  </div>
      
  );
};

export default Signup;
