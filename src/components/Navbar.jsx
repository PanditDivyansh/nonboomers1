import React, { useEffect, useState } from 'react';
import leaf2 from '../assets/leaves/leaf2.png';
import leaf1 from '../assets/leaves/leaf1.png';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import leaf4 from '../assets/leaves/leaf4.png';


const Navbar = () => {
  const [showleaf, setShowleaf] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const touched = ()=>{
    console.log("touched")
  }

  useEffect(() => {
    setTimeout(() => setShowleaf(true), 6000);
  }, []);

  const arr = ['Index', 'Editorial', 'Gallery', 'Pictureboard', 'Contact Us'];

  return (
    <div className='fixed z-[999] flex justify-between items-center font-chomsky text-bgray  sm:px-10  sm:py-2 px-5 py-2  w-full bg-transparent'>

      <img src={leaf4} className='absolute left-45 z-0  sm:hidden'></img>

      
 
      {/* <motion.img
        src={leaf2}
        alt="Falling Leaf"
        className="absolute  sm:top-40  sm:left-[75%] left-[10%] top-80  sm:w-90 w-80 pointer-events-none opacity-90 drop-shadow-[0_8px_6px_rgba(0,0,0,0.3)]"
        initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
        animate={{
          y: [0, 60, 140, 220, 300],
          x: [0, -10, 10, -2, 0],
          rotate: [0, 15, -10, 8, 0],
          opacity: [1],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
        }}
      /> */}

      {/* {showleaf && (
        <motion.img
          id="leaf"
          src={leaf1}
          alt="Decorative Leaf"
          className="absolute  sm:w-100 w-70  sm:top-70 top-30  sm:left-[34%] left-0 rotate-[300deg] drop-shadow-[0_8px_6px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )} */}

      <h1 className='text-2xl  sm:text-4xl z-10'>The Non-Boomer's Times</h1>

      {/* Mobile Menu Toggle */}
      <div className=" sm:hidden z-[1000]">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} color="#858786" /> : <FiMenu size={28} color="#858786" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className='hidden  sm:flex justify-between gap-10'>
        {arr.map((item, index) => (
          <a key={index} className={`text-2xl capitalize justify-between font-chomsky text-khaki text-light ${index === 4 && 'ml-32'} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]`}>
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
  <motion.div
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="absolute top-full left-0 w-full bg-gray-300 backdrop-blur- sm p-6 flex flex-col items-center gap-6 z-[999]  sm:hidden"
  >
    {arr.map((item, index) => (
      <a
        key={index}
        className="text-xl capitalize font-chomsky text-khaki pb-1 w-full text-center"
      >
        {item}
      </a>
    ))}
  </motion.div>
)}


    </div>
  );
};

export default Navbar;
