import React from "react";

const Basic = () => {
  return (
    <div>
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
      <select name="" id="">
        <option value="iran">Iran</option>
        <option value="usa">USA</option>
        <option value="iraq">Iraq</option>
      </select>
    </div>
  );
};

export default Basic;
