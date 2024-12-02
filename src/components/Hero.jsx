import React from 'react'
import Video from '../assets/new.mp4';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
          <video 
            src={Video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-10">
  <motion.h1 className="text-white text-6xl font-bold mb-0 leading-none"
   variants={{
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 75 },
}}
initial="hidden"
animate="visible"
transition={{ duration: 0.75, delay: 0.25 }}>
    SOLUTIONS FOR EVERY
    </motion.h1>
  <motion.h1 className="text-white text-6xl font-bold mb-4 leading-none"
  variants={{
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 75 },
}}
initial="hidden"
animate="visible"
transition={{ duration: 0.75, delay: 0.25 }}> 
   BUSINESS CHALLENGE
   </motion.h1>


  <motion.p className='text-white'
  variants={{
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 75 },
}}
initial="hidden"
animate="visible"
transition={{ duration: 0.95, delay: 0.35}}>
    Access 600+ industries, connect with thousands of vendors, and uncover insights that propel your business forward</motion.p>
  <motion.div className="flex space-x-4 mt-4"
  variants={{
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 95 },
}}
initial="hidden"
animate="visible"
transition={{ duration: 2, delay: 0.45 }}>
    <motion.button
      className="bg-[#4702a2] text-white px-6 py-2 rounded "
      whileHover={{ scale: 1.2  }}
     
    >
      GET STARTED
    </motion.button>
    <motion.button
      className="text-white px-9 py-2 rounded border border-white "
      whileHover={{ scale: 1.2 }}
    >
      LEARN MORE
    </motion.button>
  </motion.div>
</div>

    </div>
  )
}

export default Hero
