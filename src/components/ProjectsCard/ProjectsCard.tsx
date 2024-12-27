import { cardData } from "../../constants/constant";
import styles from "./ProtectsCard.module.css";
const ProjectsCard = () => {
  return (
    <div className="flex flex-col gap-10" id="project">
      <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2] text-center">My Projects</div>
      <div className="grid grid-cols-12 col-span-8 col-span-4 gap-4">
        {cardData.map((item) => (
          <div
            key={item.title}
            className={`col-span-6 ${styles.card} relative shadow`}>
            <img src={item.img} alt="" className="object-contain w-full h-full" />
            <div
              className={`${styles.cardDetails} absolute bottom-8 -left-[100%] text-white`}>
              <div className="title text-xl tracking-wider text-[#e3878b] font-medium mb-4">{item.title}</div>
              <div className="mb-2">{item.description}</div>
              <div className=""><span className="text-[#e3878b]">Tech Stack:</span> {item.tools}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
