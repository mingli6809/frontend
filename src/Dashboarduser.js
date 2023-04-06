import React, { useEffect, useState } from 'react'
import Page from './Page'
import Pagination from './Pagination';
import Search from "./Search";
import axios from 'axios'
import Display from './Display';


export default function Dashboarduser({accessToken,refreshToken, setAccessToken,userid}) {
  console.log("userid",userid);
  const [typeSelectedArray, setTypeSelectedArray] = useState([]);
    const [pokemons, setPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(10);
    const [currentId, setCurrentId] =useState(null);
    const [filterText, setFilterText] = useState('');
  
    useEffect(() => {
      axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
        .then(res => res.data)
        .then(res => {
          setPokemons(res)
        })
        .catch(err => console.log("err", err))
    }, [])

    let newList = [];
  
  pokemons.map(pokemon => {
      if (typeSelectedArray.every(type => pokemon.type.includes(type))) {
          newList.push(pokemon);
      }
      return 1;
  })
     console.log("filtertext",filterText);
     let p1=pokemons.filter(item=>item.name.english===filterText);
     newList= (p1.length===1)?p1:newList;
     newList= (p1.length===0 && filterText!=="")?p1:newList;
     
    //   console.log(p1);
    const indexOfLastRecord = currentPage * pokemonsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - pokemonsPerPage;
    const currentPokemons = newList.slice(indexOfFirstRecord, indexOfLastRecord)
    const numberOfPages = Math.ceil(newList.length / pokemonsPerPage);
    const loc = document.location;

    function logout(){
      axios.get('http://localhost:5000/logout')
   //   axios.get('https://authserver-0vt2.onrender.com/logout')
       .catch(err => console.log("err", err))
        loc.reload(true);
    }

    return (      
        <div>
      <Search
        setTypeSelectedArray={setTypeSelectedArray}
        typeSelectedArray={typeSelectedArray}
        filterText ={filterText}
        onFilterTextChange={setFilterText}
      />

      < Page currentPokemons={currentPokemons} currentPage={currentPage} setCurrentId={setCurrentId} currentId={currentId} accessToken={accessToken} setAccessToken={setAccessToken} refreshToken ={refreshToken} userid={userid}/>
      < Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        
      />
      <br/>
      <h3>Pokemon information:</h3>
      <br/>
      < Display currentPokemons={currentPokemons}  currentId={currentId}/>
      <br/>
      <button onClick={() => logout()}>Logout</button>
   
      </div>
    )
}
