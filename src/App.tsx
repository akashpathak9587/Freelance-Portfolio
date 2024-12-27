import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes";
import UserContext from "./context/UserContext/UserContext";
import WindowContext from "./context/WindowContext/WindowContext";
import { StrictMode } from "react";

const App = () => {
  return (
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
};

export default App;
