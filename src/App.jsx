import "./App.css";
import React from "react";

const welcome = {
  greeting: "Hey",
  title: "Bhoomi",
};

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" />
    </div>
  );
}

export default App;
