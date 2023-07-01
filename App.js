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

export default function MyApp() {
  return (
    <div>
      <AboutPage />
      <h2>Welcome to my app</h2>
      <MyButton />
    </div>
  );
}
