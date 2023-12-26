import "./App.css";
import React, { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "rea"
  );

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h3>
        My Hacker Stories :{" "}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </h3>
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

export default App;
