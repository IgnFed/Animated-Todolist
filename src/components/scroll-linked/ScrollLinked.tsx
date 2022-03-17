import {
  motion,
  useViewportScroll,
} from 'framer-motion'
import style from './index.module.css'

export default function ScrollLinked() {

  const { scrollYProgress } = useViewportScroll()

  return (
    <motion.div className={`container ${style.wrapper}`}>

      <motion.path className={`${style.outOfView}`}
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{pathLength:scrollYProgress}}
      >

      </motion.path>

    </motion.div>
  )
}