import { Dispatch, SetStateAction } from "react";

interface Context {
  appTitle: string;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>> | null;
}

interface Route{
  path: string;
  title: string;
}

interface cardDataType {
  title: string;
  description: string;
  tools: string;
  img: string;
  colSize: number;
}

export type { Context, Route, cardDataType };