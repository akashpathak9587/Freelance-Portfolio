import Styles from "./HomeCard.module.css";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HomeCard = () => {
  const {setSection} = useContext(ScreenContext);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setSection("Home");
    }
  }, [inView, setSection]);
  const { isMobile } = useContext(ScreenContext);
  return (
      <div
        className={`${Styles.heroCard} h-screen relative flex-container flex-col mx-auto text-[#d8dde3] text-7xl *:text-shadow-relief overflow-hidden`}
        ref={ref}>
        {/* <BirdAnimation /> */}
        <div
          className={`card-1 ${
            isMobile && "text-[18vmin]"
          } title tracking-wider font-Ubuntu mb-4`}>
          Akash P.
        </div>
        <div
          className={`title  text-3xl italic ml-[20vw] ${
            isMobile && "text-[6vmin]"
          } tracking-wider font-Ubuntu`}>
          Full Stack Developer
        </div>
        {/* <div className="title  text-3xl italic ml-36">Current Width: {width}</div> */}
      </div>
  );
};

export default HomeCard;
