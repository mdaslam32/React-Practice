import React, { createContext } from "react";
import Cmp2 from "./Cmp2";

export let context = createContext();

let user = {
  username: "Mohamed Aslam",
  age: 22,
  role: "Developer",
  location: "Chennai",
};

function ContextHook() {
  return (
    <context.Provider value={user}>
      <h1>Component 1</h1> <hr />
      <Cmp2 />
    </context.Provider>
  );
}

export default ContextHook;
