import {
  motion,
} from 'framer-motion'
import style from './index.module.css'

export default function Scroll() {

  return (
    <motion.div className={`container`}>

      <motion.div className={`box ${style.outOfView}`}
        initial={{backgroundColor:'#000fff'}}
        transition={{duration:.3,}}
        animate={{y: 100, backgroundColor:'#ccc'}}
      >
      </motion.div>

    </motion.div>
  )
}