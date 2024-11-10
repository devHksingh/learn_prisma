import {motion} from 'framer-motion'
import './App.css'
import { useState } from 'react'

function App() {
  const [rotate,setRotate] = useState(false)
  const [move,setMove] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2 bg-slate-900'>
      <motion.div 
      animate={{y:-100 ,scale:1}}
      
      initial={{scale:0}}
      className='w-32 h-32 bg-orange-400 rounded-lg'></motion.div>
      {/* rotate */}
      <motion.div
      animate={{ rotate:rotate?360:0}}
      onClick={()=>{setRotate(!rotate)}}
      className='w-32 h-32 bg-purple-400 rounded-lg'
      > 
      </motion.div>
      {/* move on x axis */}
      <motion.div
      animate={{ x:move?160:-360}}
      // transition={{delay:1}}
      // transition={{type:"tween" ,duration:0.4}}
      transition={{type:"spring" ,bounce:0.5}}
      // transition={{type:"inertia" ,velocity:100}}
      onClick={()=>{setMove(!move)}}
      className='w-32 h-32 rounded-lg bg-sky-400'
      ></motion.div>
      <motion.div
      whileHover={{scale:2}}
      className='w-32 h-32 bg-blue-400 rounded-lg'
      ></motion.div>
      {/* drag 1 */}
      <motion.div
      drag whileDrag={{scale:2}}
      className='w-32 h-32 bg-blue-400 rounded-lg'
      ></motion.div>
      {/* drag 2 */}
      <motion.div
      drag="x" dragConstraints={{left:50, right:60}}
      className='w-32 h-32 bg-red-400 rounded-lg'
      ></motion.div>
      {/* animation */}
      <motion.div
      animate={{rotate:[0,200,200,0],x:[0,200,200,0]}}
      transition={{ duration:1,repeat:2}}
      className='w-32 h-32 mb-8 bg-green-400 rounded-lg'
      ></motion.div>
    </div>
    
  )
}

export default App
