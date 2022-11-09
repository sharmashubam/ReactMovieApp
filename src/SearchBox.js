import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function SearchBox(props) {
    const [find, seFinder] = useState("");
    let sear;


    return (
        <div className='search'>
            <div className='mov'>
                <h2>Movies</h2>
            </div>
            <div className='inp'>
            <input className='form-control'
            placeholder="Search any movie..."
                onChange={(event) => seFinder(event.target.value)}
                value={find}>
            </input>
            <button type="submit" onClick={() => {
                props.searchValue(find)
                seFinder("")
            }}>Search</button>
            </div>
           
        </div>)
}


export default SearchBox;