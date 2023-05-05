import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setToken,clearToken } from '../../reducer/action';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleusername = (e) => {
    setUsername(e.target.value)
  }

  const handlepassword = (e) => {
    setPassword(e.target.value)
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try { 
      const headers = {
        'Content-Type': 'application/json',
      };
      const response = await axios.get(`http://localhost:5000/LoggedIn/UserName:${username}/Password:${password}`, { headers });
      const { token } = response.data;
      console.log('Received token:', token);
      dispatch(setToken(token));
      console.log('Token dispatched:', token);
      navigate('/search')
    } catch (error) {
      alert('Invalid username or password');
    }
  }

  return (
    <div className="login-box">
      <p>Login</p>
      <form onSubmit={handlesubmit}>
        <div className="user-box">
          <input required="" name="" type="text" id='username' onChange={handleusername} />
          <label>username</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="password" id='password' onChange={handlepassword} />
          <label>Password</label>
        </div>
        <button type='submit' className="btn" >
          SUBMIT
        </button>
      </form>
      <p>Don't have an account? <a href="./SignUp" className="a2">Sign up!</a></p>
    </div>
  )
};

export default Login;
