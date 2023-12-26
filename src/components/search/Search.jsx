import React, { useState } from "react";
import "./Search.jsx";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <span>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" onChange={handleChange} />
      &ensp; | &ensp; Searching for <strong>{searchTerm}</strong>
    </span>
  );
}
