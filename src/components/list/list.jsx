import React from "react";
import "./list.css";

export default function list(props) {
  return (
    <div>
      {props.list.map((item) => (
        <li className="list" key={item.objectId}>
          <a href={item.url}>{item.title}</a> | {item.author} | Points:{" "}
          {item.points}
          <button
            style={{ fontSize: "1.2rem" }}
            onClick={props.onRemoveItem.bind(null, item)}
          >
            Dismiss
          </button>
        </li>
      ))}
    </div>
  );
}
