import React, { useState } from "react";
import "./Search.jsx";

export default function Search(props) {

  function handleChange(event) {
    props.setSearchTerm(event.target.value);
  }

  return (
    <span>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" onChange={handleChange} value={props.searchTerm}/>
      &ensp; | &ensp; Searching for <strong>{props.searchTerm}</strong>
    </span>
  );
}
