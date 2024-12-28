import { motion } from 'framer-motion'
import { floatAnimation } from '../../constants/animate'

const FloatingAnimationWrapper = ({children}: {children: JSX.Element}) => {
  return (
      <motion.div animate={floatAnimation}>{children}</motion.div>
  )
}

export default FloatingAnimationWrapper