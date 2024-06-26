import React, { useState } from "react";

const StateHook = () => {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");
  return (
    <>
      <h1>This is useState Component</h1>
      <h3>The count is {count}</h3>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Add
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Type Something"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h3>This is typed text: {text} </h3>
    </>
  );
};

export default StateHook;
