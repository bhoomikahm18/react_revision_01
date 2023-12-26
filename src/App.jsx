import "./App.css";
import React from "react";
import List from "./components/list/list.jsx";
import Search from "./components/search/Search.jsx";

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
      <h1>
        My Hacker Stories : <Search />
      </h1>
      <hr />
      <List parcel={list} />
    </div>
  );
}

export default App;
