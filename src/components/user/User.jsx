import React, { useEffect, useState } from "react";
import '../../App.css';

export default function User() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    const fullName =
      data.results[0].name.first + " " + data.results[0].name.last;
    const emailID = data.results[0].email;
    const largeImage = data.results[0].picture.large;
    setUser({
      name: fullName,
      email: emailID,
      image: largeImage,
    });
  }, []);
  return user ? (
    <div style={{ textAlign: "center" }}>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <img src={user.image} width={"250px"} height={"250px"} />
    </div>
  ) : (
    <h1>Loading...!</h1>
  );
}
