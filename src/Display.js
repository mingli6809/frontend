import React from 'react'

export default function Display({currentPokemons, currentId }) {
  let pokemon={base:"",id:"" ,name:"",type:""};
  let pokemon1=currentPokemons.find((item)=>item.id===currentId)
  if(pokemon1===undefined) pokemon1=pokemon;
  console.log(pokemon1);
  

  
  return (
    <div>
     ID:{pokemon1.id}
     <br/>
     NAME: {pokemon1.name?.english}
     <br/>
     TYPE: {pokemon1.type}
     <br/>
     BASE ATTACK: {pokemon1.base?.Attack}
     <br/>
     BASE DEFENSE: {pokemon1.base?.Defense}
     <br/>
     BASE HP: {pokemon1.base?.HP}
     <br/>
     BASE SPEED: {pokemon1.base?.Speed}
     <br/>
     BASE SP.ATTACK: {pokemon1["base"]["Sp. Attack"]}
     <br/>
     BASE SP.DEFENSE: {pokemon1["base"]["Sp. Defense"]}
     
     
    </div>
  )
}
