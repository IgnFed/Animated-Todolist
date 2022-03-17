import {
  motion,
} from 'framer-motion'
import style from './index.module.css'

export default function Scroll() {

  return (
    <motion.div className={`container`}>

      <motion.div className={`box ${style.outOfView}`}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
      >

      </motion.div>

    </motion.div>
  )
}