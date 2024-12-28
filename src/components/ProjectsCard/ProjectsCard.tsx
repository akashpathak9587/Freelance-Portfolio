import { useContext, useEffect, useState } from "react";
import { cardData } from "../../constants/constant";
import styles from "./ProtectsCard.module.css";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../../constants/animate";
import FloatingAnimationWrapper from "../FloatingAnimationWrapper/FloatingAnimationWrapper";
const ProjectsCard = () => {
  const { setSection } = useContext(ScreenContext);
  const [projectView, setProjectView] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: projectView ? (0.06 * cardData.length) / 2 : 1,
  });
  useEffect(() => {
    if (inView) {
      setSection("Project");
      setProjectView(true);
    }
  }, [inView]);
  console.log("card length", cardData.length);
  return (
    <div className={`flex flex-col gap-10`} id="project" ref={ref}>
      <FloatingAnimationWrapper>
        <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2] text-center">
          My Projects
        </div>
      </FloatingAnimationWrapper>
      <div
        className={`grid grid-cols-12 col-span-8 col-span-4 gap-4 min-h-[20vh]`}>
        {cardData.map((item) => (
          <AnimatePresence key={item.title}>
            {projectView && (
              <motion.div
                className={`col-span-6 ${styles.card} relative shadow`}
                variants={opacityAnimation}
                animate={"animate"}
                initial={"initial"}
                exit={"exit"}>
                <img
                  src={item.img}
                  alt=""
                  className="object-contain w-full h-full"
                />
                <div
                  className={`${styles.cardDetails} absolute bottom-8 -left-[100%] text-white`}>
                  <div className="title text-xl tracking-wider text-[#e3878b] font-medium mb-4">
                    {item.title}
                  </div>
                  <div className="mb-2">{item.description}</div>
                  <div className="">
                    <span className="text-[#e3878b]">Tech Stack:</span>{" "}
                    {item.tools}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
