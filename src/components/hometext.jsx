import React from 'react'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

const hometext = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref)
    const mainControlls = useAnimation(isInView);
    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible")
        }
    }, [isInView])
  return (
    <motion.div className='bg-teal-200 pb-8'ref={ref}
    variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -75 },
    }}
    initial="hidden"
    animate={mainControlls}
    transition={{ duration: 0.4, delay: 0.2 }}>
       

<h1 className="pt-4 text-[#4702a2] text-3xl md:text-5xl lg:text-4xl font-bold mx-2 text-center ">
 
  POWERING YOUR BUSINESS WITH IN-DEPTH BB2 RESOURCES

</h1>
<p className="flex justify-center items-center text-lg md:text-2xl lg:text-lg text-left leading-relaxed tracking-wide mx-2">

Leverage our extensive platform to access the best whitepapers for your needs. 
</p><div className='flex w-full'>
</div>

</motion.div>
  )
}

export default hometext
