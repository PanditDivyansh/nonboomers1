import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="0.3"  data-scroll-section className='w-full py-15 pb-20 mb-0 bg-orange-800 sm:rounded-tr-3xl sm:rounded-tl-3xl rounded-3xl'>
        <div className='border-t-4 border-t-gray-200 border-b-4 gap-10 border-b-gray-200 flex overflow-hidden whitespace-nowrap drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)]'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='sm:text-[10vw] text-8xl py-5 leading-none font-chomsky text-gray-100 tracking-tighter'>Closed Minds Not Allowed .</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='sm:text-[10vw] text-8xl py-5 leading-none font-chomsky text-gray-100 tracking-tighter'>Closed Minds Not Allowed .</motion.h1>
        </div>
    </div>
  )
}

export default Marquee