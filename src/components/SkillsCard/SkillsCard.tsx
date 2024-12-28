import { useContext, useEffect, useState } from "react";
import { skills } from "../../constants/constant";
import styles from "./SkillsCard.module.css";
import { useInView } from "react-intersection-observer";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../../constants/animate";
import FloatingAnimationWrapper from "../FloatingAnimationWrapper/FloatingAnimationWrapper";

const SkillsCard = () => {
  const { setSection } = useContext(ScreenContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [skillsView, setSkillsView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setSection("Skills");
      setSkillsView(true);
    }
  }, [inView, setSection]);

  return (
    <div className="py-12" id="skills" ref={ref}>
      <FloatingAnimationWrapper>
        <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2] text-center">
          My Skills
        </div>
      </FloatingAnimationWrapper>

      <div
        className={`${styles.container} h-[70vh] relative flex items-center justify-around text-gray-800 text-8xl overflow-hidden`}>
        {skills.map((skill) =>
          Object.entries(skill).map(([key, value]) => (
            <AnimatePresence key={key} mode="wait">
              {skillsView && (
                <motion.div
                  className={`w-[25%] text-xl text-center p-4 ${styles.card} rounded-md h-[60vh] shadow-lg bg-[#b9a1a2] bg-clip-text text-transparent`}
                  variants={opacityAnimation}
                  animate={"animate"}
                  initial={"initial"}
                  exit={"exit"}>
                  <div className="title tracking-wider text-3xl font-medium">
                    {key}
                  </div>
                  <div
                    className={`mt-12  h-[40vh] flex flex-col justify-between`}>
                    {value.map((v: string) => (
                      <p>{v}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
