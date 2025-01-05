import { motion, useScroll, useSpring } from "framer-motion";

const Trackpad = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: "fixed",
        top: 60,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#bda6a6",
        zIndex: "10000",
      }}
    />
  );
};

export default Trackpad;
