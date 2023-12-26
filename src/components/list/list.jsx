import React from "react";
import './list.css';

export default function list(props) {
  return (
    <div>
      {props.parcel.map((item) => (
        <li className="list" key={item.objectId}>
          <a href={item.url}>{item.title}</a> | {item.author} | {item.points}
        </li>
      ))}
    </div>
  );
}

