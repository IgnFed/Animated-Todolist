import './app.css'
import { motion } from 'framer-motion'
// import Drag from './components/Drag/Drag'
// import Scroll from './components/Scroll/Scroll'
// import Initial from './components/Initial/Initial'
import ScrollLinked from './components/scroll-linked/ScrollLinked'

export default function App(){
  return(
    <motion.div id='parent'>
      <ScrollLinked />
    </motion.div>
  )
}