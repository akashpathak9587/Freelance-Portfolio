import Styles from "./HomeCard.module.css";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { useContext } from "react";
const HomeCard = () => {
  const { isMobile } = useContext(ScreenContext);
  return (
    <div className={`${Styles.heroCard} h-[94vh] relative flex-container flex-col mx-auto text-[#b9c2c2] text-7xl shadow-2xl *:text-shadow-relief overflow-hidden`}>
      {/* <BirdAnimation /> */}
      <div className={`card-1 ${isMobile && "text-[18vmin]"}`}>Akash P.</div>
      <div className={`title  text-3xl italic ml-[20vw] ${isMobile && "text-[6vmin]"}`}>Full Stack Developer</div>
      {/* <div className="title  text-3xl italic ml-36">Current Width: {width}</div> */}
    </div>
  );
};

export default HomeCard;
