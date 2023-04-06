import React, { useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard';
import Dashboarduser from './Dashboarduser';
import { BrowserRouter } from "react-router-dom"
// import authServer from './authServer.js'
// const { connectDB } = require("./connectDB.js")
// import {connectDB } from './connectDB'

function Login() {
 // const { connectDB } = require("./src/connectDB.js")
 // const app2 = require('./appServer.js');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken,setAccessToken] =useState('')
  const [refreshToken,setRefreshToken] =useState('')
  const [user, setUser] = useState({});
  const [userid , setUserid] =useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
   //   const res = await axios.post("https://authserver-0vt2.onrender.com/login", { username, password });
      console.log(res.data.username);
   //   localStorage.setItem("userid", res.data.username);
      setUserid(res.data.username);
      setUser(res.data);
      setAccessToken(res.headers['auth-token-access']);
      setRefreshToken(res.headers['auth-token-refresh']);

  //    console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {user?.username ?(user?.username==="admin" ? (
        <>
          <h1>Welcome {user.username}</h1>
          <BrowserRouter>
          <Dashboard accessToken={accessToken} refreshToken={refreshToken} setAccessToken={setAccessToken}/>
          </BrowserRouter>
          
        </>
      ):(
        <>
          <h1>Welcome {user.username}</h1>
          <BrowserRouter>
          <Dashboarduser accessToken={accessToken} refreshToken={refreshToken} setAccessToken={setAccessToken} userid={userid}/>
          </BrowserRouter>
          
        </>
      ) ): (
        <form onSubmit={handleSubmit}>
          <span> Please Login </span>
          <br />
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  )
}

export default Login