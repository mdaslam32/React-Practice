import React, { useRef } from "react";

const RefHook = () => {
  let refval = useRef();

  console.log("Component Rendered");

  return (
    <>
      <h1>This is useRef Component</h1>
      <input type="text" ref={refval} />
      <button
        onClick={() => {
          console.log(refval.current.value);
        }}
      >
        Show Value
      </button>
    </>
  );
};

export default RefHook;
