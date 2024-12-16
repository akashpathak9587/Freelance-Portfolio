import { createContext } from "react";

export const ScreenContext = createContext<{ width: number }>({
  width: window.innerWidth,
});