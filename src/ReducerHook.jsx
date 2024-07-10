import React, { useReducer } from "react";

function reducerFun(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducerFun, { count: 1 });
  console.log(state.count);

  return (
    <>
      <h1>This is useReducer component</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
          style={{ margin: "5px" }}
        >
          -
        </button>
        <h3 style={{ margin: "5px" }}>{state.count}</h3>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
          style={{ margin: "5px" }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default ReducerHook;
