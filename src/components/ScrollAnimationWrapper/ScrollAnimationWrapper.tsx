import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { opacityAnimation } from "../../constants/animate";

const ScrollAnimationWrapper = ({ children }: { children: JSX.Element }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);
  return (
    <motion.div ref={ref} variants={opacityAnimation} initial="initial" animate={controls}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
