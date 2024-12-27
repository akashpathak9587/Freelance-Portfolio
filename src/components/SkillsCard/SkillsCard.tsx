import { useContext, useEffect } from "react";
import { skills } from "../../constants/constant";
import styles from "./SkillsCard.module.css";
import { useInView } from "react-intersection-observer";
import { ScreenContext } from "../../context/WindowContext/WindowContext";

const SkillsCard = () => {
  const {
    setSection,
  } = useContext(ScreenContext);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setSection("Skills");
    }
  }, [inView, setSection]);
  return (
    <div className="py-12" id="skills" ref={ref}>
      <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2] text-center">
        My Skills
      </div>

      <div
        className={`${styles.container} h-[70vh] relative flex items-center justify-around text-gray-800 text-8xl overflow-hidden`}>
        {skills.map((skill) =>
          Object.entries(skill).map(([key, value]) => (
            <div
              key={key}
              className={`w-[25%] text-xl text-center p-4 ${styles.card} rounded-md h-[60vh] shadow-lg bg-[#b9a1a2] bg-clip-text text-transparent`}>
              <div className="title tracking-wider text-3xl font-medium">
                {key}
              </div>
              <div className={`mt-12  h-[40vh] flex flex-col justify-between`}>
                {value.map((v: string) => (
                  <p>{v}</p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
