// src/pages/LoginPage.js

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      const existingUser = JSON.parse(localStorage.getItem('users')) || [];
      if (existingUser.find((user) => user.email === formData.email)) {
        alert('This email is already registered.');
        return;
      }

      const updatedUsers = [...existingUser, formData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registration successful! Please log in.');
      setIsRegistering(false); 
    } else {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        setUser(user); 
        localStorage.setItem('user', JSON.stringify(user)); 
        navigate('/account'); 
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <LoginForm
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
      />
    </div>
  );
};

export default LoginPage;

