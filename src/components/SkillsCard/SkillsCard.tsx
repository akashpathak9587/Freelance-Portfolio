import { skills } from "../../constants/constant";
import styles from "./SkillsCard.module.css";
const SkillsCard = () => {
  
  return (
    <div
      className={`${styles.container} h-screen relative flex-container justify-around mx-auto text-gray-800 text-8xl shadow-2xl overflow-hidden`}>
      {skills.map((skill) =>
        Object.entries(skill).map(([key, value]) => (
          <div
            className={`w-[25%] text-xl text-center p-4 ${styles.card} rounded-md h-[70vh] bg-gradient-to-tr from-gray-800 to-[#32466294] ${styles.card} bg-clip-text text-transparent shadow-lg shadow-gray-800`}>
            <div className="title tracking-wider text-3xl font-medium">
              {key}
            </div>
            <div className={`mt-12  h-[50vh] flex flex-col justify-between`}>
              {value.map((v: string) => (
                <p>{v}</p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SkillsCard;
