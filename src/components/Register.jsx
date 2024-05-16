import React, { useState } from 'react';
import authService from '../services/AuthService';

const Register = () => {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(userInfo);
      // Redirigir a la página de login o la que prefieras
    } catch (error) {
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={userInfo.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
