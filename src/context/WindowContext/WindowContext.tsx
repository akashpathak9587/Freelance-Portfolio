import { ReactNode, useEffect, useMemo, useState } from "react";
import { ScreenContext } from "./WindowContext";

const WindowContext = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(width <= 600);
  }, [width])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const contextValue = useMemo(() => ({ width, isMobile }), [width, isMobile]);
  return (
    <ScreenContext.Provider value={contextValue}>
      {children}
    </ScreenContext.Provider>
  );
};

export default WindowContext;
