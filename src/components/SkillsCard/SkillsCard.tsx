import { skills } from "../../constants/constant";
import styles from "./SkillsCard.module.css";
const SkillsCard = () => {
  return (
    <div className="py-12">
      <div className="text-5xl nowrap text-center p-4">My Skills</div>

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
                {value.map((v: string, index: number) => (
                  <p key={index}>{v}</p>
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
