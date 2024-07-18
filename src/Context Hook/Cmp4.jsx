import React, { useContext } from "react";
import { context } from "./ContextHook";

function Cmp4() {
  let user = useContext(context);
  return (
    <>
      <h1>Component 4</h1>
      <h3>
        Hello {user.username}, I am a {user.role} from {user.location}
      </h3>
      <i>
        <sup>*</sup>This data came from Component 1 using useContext
      </i>
    </>
  );
}

export default Cmp4;
