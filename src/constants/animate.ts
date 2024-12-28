const floatAnimationCard1 = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const floatAnimationCard2 = {
  y: [0, 20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const opacityAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export {
  floatAnimationCard1,
  floatAnimationCard2,
  floatAnimation,
  opacityAnimation,
};
