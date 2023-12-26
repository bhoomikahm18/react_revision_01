import './App.css';
import React from 'react';

const title = 'Bhoomi'

function App() {
  return (
    <div style={{"textAlign": "center"}}>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search : </label>
      &ensp; <input id='search' type="text" />
    </div>
  );
}

export default App;
