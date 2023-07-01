import React, { useReducer } from "react";
import "./styles.css";

function MyButton() {
  return <button>press me! I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}
const user = {
  name: "Heidy",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg"
};

export default function MyApp() {
  return (
    <div>
      <AboutPage />
      <h2>Welcome to my app</h2>
      <MyButton />
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    </div>
  );
}
