import React from 'react'
import Pokemon from './Pokemon'
import  './style.css'
function page({ currentPokemons, currentPage, setCurrentId, currentId,accessToken,refreshToken, setAccessToken,userid }) {
  return (
    <div>
      <h1>
        Page number {currentPage}
      </h1>
      <div className="pokemon-list">
        {
          currentPokemons.map(item => {
            
            return    <div key={item.id}>  <Pokemon pokemon={item} setCurrentId={setCurrentId} currentId={currentId} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken} userid={userid}/>   </div>     
          
                                
          })
          
        }
        
      </div>
      
    </div>
  )
}

export default page