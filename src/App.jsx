import "./App.css";
import React from "react";

// const welcome = {
//   greeting: "Hey",
//   title: "Bhoomi",
// };

// function getTitle(title){
//   return title;
// }
const list = [
  {
    title: "React",
    url: "https://react.js.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

function App() {
  return (
    <div className="container">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search : </label>
      &ensp; <input id="search" type="text" />
      <hr />
      {list.map((item) => {
        return (
          <li className="list" key={item.objectId}>{item.title}</li>
        );
      })}
    </div>
  );
}

export default App;
