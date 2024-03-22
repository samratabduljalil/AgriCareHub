import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./userAuthentication.css";



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill up all the required fields.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost/agricarehub/login.php', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data);
      if (response.data.success) {
        // Redirect to dashboard upon successful login
        window.location.href = '/dashboard'; 
        <Link to="/dashboard"></Link>
        
        
      } else {
        setErrorMessage(response.data.message || 'Login failed');
        setFormData({
          
          email: '',
          password: ''
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <div className="wrapper">
      {errorMessage && <p className='errorMsg'>{errorMessage}</p>}
      <form action="#" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required="" />
          <i className="bx bxs-envelope" />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}  required="" />
          <i className="bx bxs-lock-alt" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn" disabled={submitting}>
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?  <Link to="/signup" className="reg">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
