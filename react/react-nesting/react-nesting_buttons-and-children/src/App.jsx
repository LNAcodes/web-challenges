import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button>Click Me if you dare!</Button>
      <Button>Do not Click Me!</Button>
      <Button>Click Me 10 times!</Button>
    </main>
  );
}

function Button({ children }) {
  console.log(children);
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
