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
const stories = [
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
  {
    title: "Angular",
    url: "https://angular.io/",
    author: "Google",
    num_comments: 4,
    points: 2,
    objectId: 3,
  },
  {
    title: "Vue JS",
    url: "https://vuejs.org/",
    author: "Evan You",
    num_comments: 6,
    points: 3,
    objectId: 4,
  },
  {
    title: "Next JS",
    url: "https://nextjs.org/",
    author: "Vercel",
    num_comments: 7,
    points: 5,
    objectId: 5,
  },
];

function App() {
  return (
    <div className="container">
      <h1>
        My Hacker Stories : <Search />
      </h1>
      <hr />
      <List list={stories} />
    </div>
  );
}

export default App;
