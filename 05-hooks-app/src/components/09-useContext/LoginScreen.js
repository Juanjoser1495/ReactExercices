import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 456, name: "Juan Jose" })}
      >
        Login
      </button>
    </div>
  );
};
