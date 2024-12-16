import { ReactNode, useEffect, useMemo, useState } from "react";
import { ScreenContext } from "./WindowContext";

const WindowContext = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const contextValue = useMemo(() => ({ width, setWidth }), [width]);
  return (
    <ScreenContext.Provider value={contextValue}>
      {children}
    </ScreenContext.Provider>
  );
};

export default WindowContext;
