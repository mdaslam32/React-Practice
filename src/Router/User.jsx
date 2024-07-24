import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return (
    <>
      <h1>User Component</h1>
      {username ? (
        <h2 style={{ marginLeft: "30px" }}>Hello {username}!</h2>
      ) : (
        <i>
          <sup>*</sup>Enter your name in the URL after slash.
        </i>
      )}
    </>
  );
}

export default User;
