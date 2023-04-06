import React from 'react'
import { Route, Routes, Link, redirect } from "react-router-dom"
import axios from 'axios'
import Report1 from './Report1'
import Report2 from './Report2'
import Report3 from './Report3'
import Report4 from './Report4'
import Report5 from './Report5'

export default function Dashboard({accessToken,refreshToken, setAccessToken}) { 
  const loc = document.location;
  function logout(){
 axios.get('http://localhost:5000/logout')
 // axios.get('https://authserver-0vt2.onrender.com/logout')
   .catch(err => console.log("err", err))
    loc.reload(true);
 
  
}
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/Report/1">Report1</Link></li>
          <li><Link to="/Report/2">Report2</Link></li>
          <li><Link to="/Report/3">Report3</Link></li>
          <li><Link to="/Report/4">Report4</Link></li>
          <li><Link to="/Report/5">Report5</Link></li>
        
        </ul>
      </nav>

      <Routes>
        <Route path="/Report/1" element={<Report1 id={1} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken}/>} />
        <Route path="/Report/2" element={<Report2 id={2} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken}/>} />
        <Route path="/Report/3" element={<Report3 id={3} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken}/>} />
        <Route path="/Report/4" element={<Report4 id={4} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken}/>} />
        <Route path="/Report/5" element={<Report5 id={5} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken}/>} />
      </Routes>
      <button onClick={() => logout()}>Logout</button>
    </>
  )
}
