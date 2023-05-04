import './Login.css';
import React, { useEffect, useState } from 'react';
// import { redirect } from 'react-router-dom';
// import { search } from '../Search/Search';
import axios from 'axios';

// const RequireAuth = (WrappedComponent) => {
//   // This is the component that wraps the Search component
//   const RequireAuthWrapper = () => {
//     // Define state for the user authentication status
//     const [authenticated, setAuthenticated] = useState(false);

//     useEffect(() => {
//       // Check if the user is authenticated
//       const isAuthenticated = checkUserAuthenticationStatus();

//       // Update the state
//       setAuthenticated(isAuthenticated);
//     }, []);

//     // Redirect the user to the login page if not authenticated
//     if (!authenticated) {
//       return <redirect to="/Login" />;
//     }

//     // Render the wrapped component if authenticated
//     return <WrappedComponent />;
//   };

//   return RequireAuthWrapper;
// };



  
  const handleLoginSubmit = async(username,password) => {
    
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    const response = await axios.get(`http://localhost:5000/LoggedIn/UserName:${username}/Password:${password}`,
    {headers});
    
    if (response.status === 201) {
      alert("tamam")
    }
  } catch (error) {
    alert("msh tamam khaaaaaaaaaaaaaaaaaaaaales")
    console.error(error);
  } 
};

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleusername = (e)=>{
    setUsername(e.target.value)
  }

  const handlepassword = (e) =>{
    setPassword(e.target.value)
  }

 const handlesubmit= async(e)=>{
  e.preventDefault();
  await handleLoginSubmit(username,password)
}

  return (
    <div className="login-box">
  <p>Login</p>
  <form  onSubmit={handlesubmit}> 
    <div className="user-box">
      <input required="" name="" type="text" id='username' onChange={handleusername}/>
      <label>username</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="password" id='password' onChange={handlepassword}/>
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
