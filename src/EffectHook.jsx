import React, { useEffect, useState } from "react";

const EffectHook = () => {
  let [num, setNum] = useState(1);

  useEffect(() => {
    console.log("useEffect Called");
  }, [num]);
  return (
    <>
      <h1>This is useEffect Component</h1>
      <h2>This is useEffect {num}</h2>
      <button
        onClick={() => {
          setNum(++num);
        }}
      >
        Add
      </button>{" "}
      <br />
      <i>*When you click the button the component will render again</i>
    </>
  );
};

export default EffectHook;
