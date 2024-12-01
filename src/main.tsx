import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./routes.tsx";
import UserContext from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserContext>
      <StrictMode>
        <AppRoute />
      </StrictMode>
    </UserContext>
  </BrowserRouter>
);
