import { ReactNode, useEffect, useMemo, useState } from "react";
import { createContext } from "react";

type ScreenContextType = {
  width: number,
  isMobile: boolean,
  section: string,
  setSection: any,
}

export const ScreenContext = createContext<ScreenContextType>({
  width: window.innerWidth,
  isMobile: false,
  section: "",
  setSection: undefined
});

const WindowContext = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [section, setSection] = useState<string>("");
  

  useEffect(() => {
    setIsMobile(width <= 600);
  }, [width])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const contextValue = useMemo(() => ({ width, isMobile, section, setSection }), [width, isMobile, section]);
  return (
    <ScreenContext.Provider value={contextValue}>
      {children}
    </ScreenContext.Provider>
  );
};

export default WindowContext;
