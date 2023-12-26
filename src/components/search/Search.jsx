import React from "react";
import './Search.jsx';

let searchTerm = '';

function handleChange(event){
  console.log(event.target.value);
}

export default function Search() {
  return (
    <span>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" onChange={handleChange}/>
      &ensp; | &ensp; Searching for <strong>{searchTerm}</strong>
    </span>
  );
}
