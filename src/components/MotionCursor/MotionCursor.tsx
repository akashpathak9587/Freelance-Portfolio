import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const MotionCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });

  const scale = useTransform(cursorX, [0, window.innerWidth], [0.8, 1.2]);
  const rotate = useTransform(cursorX, [0, window.innerWidth], [-10, 10]);
  const opacity = useTransform(cursorY, [0, window.innerHeight], [0.5, 1]);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-black pointer-events-none z-[10000]"
      style={{ x: springX, y: springY, scale, rotate, opacity }}></motion.div>
  );
};

export default MotionCursor;
