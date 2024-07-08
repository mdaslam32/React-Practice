import React, { useMemo, useState } from "react";

function slowfun() {
  console.log("Slow Function Running");

  setTimeout(() => {
    console.log("Slow Function Executed");
  }, 5000);
}

const MemoHook = () => {
  let [num, setNum] = useState(1);
  let [num2, setNum2] = useState(2);
  const double = useMemo(() => {
    return slowfun(num);
  }, [num]);

  return (
    <>
      <h1>This is useMemo Hook</h1>
      <h3>This is Num1 value: {num}</h3>
      <button
        onClick={() => {
          setNum(++num);
        }}
      >
        Add
      </button>
      <h3>This is Num2 value: {num2}</h3>
      <button
        onClick={() => {
          setNum2(++num2);
        }}
      >
        Add
      </button>
    </>
  );
};

export default MemoHook;
