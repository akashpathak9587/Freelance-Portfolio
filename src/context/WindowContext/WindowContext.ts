import { createContext } from "react";

export const ScreenContext = createContext<{ width: number, isMobile: boolean }>({
  width: window.innerWidth,
  isMobile: false,
});