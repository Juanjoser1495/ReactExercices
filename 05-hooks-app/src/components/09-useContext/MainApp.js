import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  // const user = { id: 1234, name: "Fernando", email: "juan@gmail.com" };
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
