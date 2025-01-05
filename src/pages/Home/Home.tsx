import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MessageBox from "../../components/MessageBox/MessageBox";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper/ScrollAnimationWrapper";
import Trackpad from "../../components/Trackpad/Trackpad";
import MotionCursor from "../../components/MotionCursor/MotionCursor";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <Trackpad />
      <MotionCursor />
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>
      <SkillsCard />
      <ProjectsCard />
      <ScrollAnimationWrapper>
        <MessageBox />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Footer />
      </ScrollAnimationWrapper>
    </motion.div>
  );
};

export default Home;
