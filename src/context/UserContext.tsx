import { ReactNode, useEffect, useMemo, useState } from "react";
import { AppContext } from "./UserContext";
import { DefaultContext } from "../utility/context";

const UserContext = ({ children }: { children: ReactNode }) => {
  const [appTitle, setAppTitle] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const newAppTitle = localStorage.getItem("appTitle") || DefaultContext.appTitle;
    localStorage.setItem("appTitle", newAppTitle);
    setAppTitle(newAppTitle);
  }, []);

  const contextValue = useMemo(() => ({ appTitle, loggedIn, setLoggedIn }), [appTitle, loggedIn]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default UserContext;
