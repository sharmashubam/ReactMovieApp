import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import Movie from './Movie';
import {moviedata} from './data.js'

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [favourites,setFavourites]= useState([]);
  const[movies,setMovies]= useState([]);
  


  const getMovies = function (searchValue) {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=b302cf69`).then(function (response) {
      return response.json();
    }).then(function (d) {
      setData(d.Search);
    })
  }
  const searchHandler= function(value){
    setSearchValue(value);
  }

  useEffect(() => {
    getMovies(searchValue);

  }, [searchValue]);
  


  return (
    <div className='movie-app'>
      <SearchBox searchValue={searchHandler}></SearchBox>

      <div className='list'>
        {searchValue ? <Movie items={data}></Movie>:
        <Movie items={moviedata}></Movie>
        }
      </div>
    </div>

  );
}

export default App;
