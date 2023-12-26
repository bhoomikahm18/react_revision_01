import React from "react";
import './Search.jsx';

function handleChange(event){
  console.log(event.target.value);
}

export default function Search() {
  return (
    <span>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" onChange={handleChange}/>
    </span>
  );
}
