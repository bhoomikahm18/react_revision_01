import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import List from "./components/list/list.jsx";
import Search from "./components/search/Search.jsx";

// const welcome = {
//   greeting: "Hey",
//   title: "Bhoomi",
// };

// function getTitle(title){
//   return title;
// }
const initialStories = [
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

function useSemiPersistentState(key, initialState) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}

function storiesReducer(state, action) {
  switch (action.type) {
    case "SET_STORIES":
      return action.payload;
    case "REMOVE_STORY":
      return action.filter(
        (story) => action.payload.objectId !== story.objectId
      );
      default: throw new Error();
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "Re");

  const [stories, dispatchStories] = useReducer(storiesReducer, []);

  useEffect(() => {
    dispatchStories({ type: "ET_STORIES", payload: initialStories });
  }, []);

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleRemoveStory(item) {
    // const newStories = stories.filter(
    //   (story) => item.objectId !== story.objectId
    // );
    dispatchStories({ type: "SET_STORIES", payload: item });
  }

  return (
    <div className="container">
      <h3>
        My Hacker Stories :{" "}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </h3>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

export default App;
