import {
  motion,
  useMotionValue,
  useTransform
} from 'framer-motion';

import style from './index.module.css'

export default function Drag(){
  const x = useMotionValue(0)
  const dragXValues = [-100, 0 , 100];
  const opacityValues = ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  const bg = useTransform(x, dragXValues,opacityValues)

  return(
    <motion.div className={'container'} style={{background:bg}}>
    <motion.div id={style.box}
    drag='x'
    dragConstraints={{left:0, right:0}}
    style={{x}}
    >
    </motion.div>
    </motion.div>
  );
}