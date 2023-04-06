import React from 'react'
import  './style.css'
import axios from'axios'
import {
  useEffect
} from 'react'

import jwt_decode from 'jwt-decode'
// import {
//   useParams
// } from "react-router-dom"

function Pokemon({ pokemon, setCurrentId,currentId ,accessToken,refreshToken, setAccessToken,userid}) {

 
  const axiosJWT=axios.create();

  axiosJWT.interceptors.request.use(async function (config) {
    const decodedToken=jwt_decode(accessToken);
    if(decodedToken.exp < Date.now()/1000){
      const res=await axios.get('http://localhost:5000/requestNewAccessToken',{
    //    const res=await axios.get('https://authserver-0vt2.onrender.com/requestNewAccessToken',{ 
        headers:{'auth-token-refresh':refreshToken} 
      })

    setAccessToken(res.headers['auth-token-access']);
    config.headers['auth-token-access']= res.headers['auth-token-access'];
    }
    


    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  //  const { id } = useParams()
  useEffect(() => {async function fet(){
    const res = await axiosJWT.get(`http://localhost:6001/api/v1/pokemon?id=${pokemon.id}&userid=${userid}`, {
 //     const res = await axiosJWT.get(`https://appserver-vff5.onrender.com/api/v1/pokemon?id=${pokemon.id}&userid=${userid}`, {
      headers: {
        'auth-token-access': accessToken
      }
    })
    console.log(res.data);};
  
    fet();
    
  }, [currentId])

  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }
  // axios.get(`http://localhost:6001/api/v1/pokemon?id=${pokemon.id}&appid`)
  //       .then(res => res.data)
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err => console.log("err", err))

  return (
    
    <div>
      <img onClick={() => setCurrentId(pokemon.id)} className={(currentId === pokemon.id) ? 'active' : ''} src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} alt=""/>
      <h4>{pokemon.name.english}</h4>
     
      </div>
      
  )
}

export default Pokemon