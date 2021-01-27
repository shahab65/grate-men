import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>shahab</h1>
      <button
        onClick={() => {
          alert("h");
        }}
      >
        click me
      </button>

      <a href="/students"> google</a>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;
