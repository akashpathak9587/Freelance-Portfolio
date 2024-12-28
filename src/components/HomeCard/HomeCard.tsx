import Styles from "./HomeCard.module.css";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  floatAnimationCard1,
  floatAnimationCard2,
} from "../../constants/animate";

const HomeCard = () => {
  const { setSection } = useContext(ScreenContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
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
      <motion.div
        className={`card-1 ${
          isMobile && "text-[18vmin]"
        } title tracking-wider font-Ubuntu mb-4`}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={floatAnimationCard1}>
        Akash P.
      </motion.div>
      <motion.div
        className={`title  text-3xl italic ml-[20vw] ${
          isMobile && "text-[6vmin]"
        } tracking-wider font-Ubuntu`}
        drag
        dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={floatAnimationCard2}>
        Full Stack Developer
      </motion.div>
    </div>
    // <div
    //   className={`${Styles.heroCard} h-screen relative flex-container flex-col mx-auto text-[#d8dde3] text-7xl *:text-shadow-relief overflow-hidden`}
    //   ref={ref}>
    //   {/* <BirdAnimation /> */}
    //   <div
    //     className={`card-1 ${
    //       isMobile && "text-[18vmin]"
    //     } title tracking-wider font-Ubuntu mb-4`}>
    //     Akash P.
    //   </div>
    //   <div
    //     className={`title  text-3xl italic ml-[20vw] ${
    //       isMobile && "text-[6vmin]"
    //     } tracking-wider font-Ubuntu`}>
    //     Full Stack Developer
    //   </div>
    // </div>
  );
};

export default HomeCard;
