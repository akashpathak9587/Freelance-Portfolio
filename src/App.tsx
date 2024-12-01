import { useContext, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/UserContext";

function App() {
  const { loggedIn } = useContext(AppContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  return (
   <HeroSection/>
  )
}

export default App;
