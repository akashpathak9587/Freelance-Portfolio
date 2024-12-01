import { Dispatch, SetStateAction } from "react";

interface Context {
  appTitle: string | null;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>> | null;
}

interface Route{
  path: string;
  title: string;
}

export type { Context, Route };