import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MessageBox from "../../components/MessageBox/MessageBox";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsCard />
      <ProjectsCard />
      <MessageBox />
      <Footer />
    </>
  );
};

export default Home;
