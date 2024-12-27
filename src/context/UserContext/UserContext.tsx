import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { Context } from "../../types/type";
import { DefaultContext } from "../../utility/context";

export const AppContext = createContext<Context>(DefaultContext);

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
