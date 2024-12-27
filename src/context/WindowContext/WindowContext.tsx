import { ReactNode, useEffect, useMemo, useState } from "react";
import { createContext } from "react";

type ScreenContextType = {
  width: number,
  isMobile: boolean,
  inView: boolean,
  setInView: any,
  section: string,
  setSection: any,
}

export const ScreenContext = createContext<ScreenContextType>({
  width: window.innerWidth,
  isMobile: false,
  inView: false,
  setInView: undefined,
  section: "",
  setSection: undefined
});

const WindowContext = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [inView, setInView] = useState<boolean>(false);
  const [section, setSection] = useState<string>("");
  

  useEffect(() => {
    setIsMobile(width <= 600);
  }, [width])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const contextValue = useMemo(() => ({ width, isMobile, inView, setInView, section, setSection }), [width, isMobile, inView, section]);
  return (
    <ScreenContext.Provider value={contextValue}>
      {children}
    </ScreenContext.Provider>
  );
};

export default WindowContext;
