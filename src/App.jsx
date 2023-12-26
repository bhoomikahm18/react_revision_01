import "./App.css";
import React from "react";

// const welcome = {
//   greeting: "Hey",
//   title: "Bhoomi",
// };

function getTitle(title){
  return title;
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello {getTitle('Bhoomi')}</h1>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" />
    </div>
  );
}

export default App;
