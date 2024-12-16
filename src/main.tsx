import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./routes.tsx";
import UserContext from "./context/UserContext.tsx";
import WindowContext from "./context/WindowContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserContext>
      <WindowContext>
        <StrictMode>
          <AppRoute />
        </StrictMode>
      </WindowContext>
    </UserContext>
  </BrowserRouter>
);
