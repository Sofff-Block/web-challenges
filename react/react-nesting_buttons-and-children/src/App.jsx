import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Submit Button</Button>
      <Button>Take Button</Button>
      <Button>See Button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
