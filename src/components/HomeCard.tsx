import "./HomeCard.css";
import { ScreenContext } from "../context/WindowContext";
import { useContext } from "react";
const HomeCard = () => {
  const { width }: { width: number } = useContext(ScreenContext);
  console.log(width);
  return (
    <div className="hero-card h-[94vh] relative flex-container flex-col mx-auto text-gray-800 text-7xl shadow-2xl *:text-shadow-relief overflow-hidden">
      {/* <BirdAnimation /> */}
      <div className="card-1">Akash P.</div>
      <div className="title  text-3xl italic ml-[20vw]">Full Stack Developer</div>
      {/* <div className="title  text-3xl italic ml-36">Current Width: {width}</div> */}
    </div>
  );
};

export default HomeCard;
