import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Icon from "../assets/Infi.png"
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <nav className="bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 text-white bg-opacity-30
     backdrop-blur fixed px-3 p-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0  text-xl" >
        {/* dektop nav */}
        <div className="flex justify-between items-center ">
        
        <div className="flex items-center justify-between sm:px-4 pb-2 pt-2 ">
            <motion.div to="/" className="flex p-3"
            whileHover={{ scale: 1.2, rotate: 2}}
            >
                <img
                    src={Icon}
                    alt="icon"
                    className="hidden sm:block sm:w-[120px] sm:-h-[120px] -mt-0 pt-2"
                    style={{
                        // height: "48px",
                        // width: "48px",
                        borderRadius: "8px", 
                        cursor: "pointer",
                      }}
                />
                <span className="ml-2 mt-0 sm:hidden sm:mt-0 font-semibold text-xl you">
                  InfiniteB2b
                </span>
            </motion.div>
                            
                <ul className="sm:flex justify-center hidden gap-3">
                    <motion.li className="p-2 mr-2  font-bold cursor-pointer" whileHover={{ scale: 1.2 }}>
                        <div to="/">Home</div>
                    </motion.li>
                    <motion.li className="p-2 mr-2  font-bold cursor-pointer"whileHover={{ scale: 1.2 }}>
                        <div to="/about">Whitepaper Set</div>
                    </motion.li>
                    <motion.li className="p-2 mr-2 font-bold cursor-pointer"whileHover={{ scale: 1.2 }}>
                        <div to="/services">News Letter</div>
                    </motion.li>
                    </ul>
                    
                    </div>
                    
                    <motion.div className="p-2 font-bold cursor-pointer "whileHover={{ scale: 1.2}}>
                        <button className="rounded-full bg-white p-3 text-purple-500"> Sign Up</button>
                    </motion.div>
                    
                
                <button onClick={() => setOpen(!open)} className="sm:hidden ">
                    <GiHamburgerMenu size={30} className="mt-2 mr-2 text-blue-500" />
                </button>

            </div>
            
            
        
        {/* desktop nav end */}
        <div className={`${open ? null : "hidden"} h-[12rem]`}>
            <ul>
                <li className=" font-bold  pl-8 cursor-pointer pb-4 pt-6">
                    <div to="/">Home</div>
                </li>
                <li className=" font-bold pl-8 cursor-pointer pb-4">
                    <div to="/about">Whitepaper Set</div>
                </li>
                <li className=" font-bold pl-8 cursor-pointer pb-4">
                    <div to="/services">News Letter</div>
                </li>
                
                <li className=" font-bold pl-8 cursor-pointer pb-4">
                    <div to="/contact">Sign Up</div>
                </li>
            </ul>
            
        </div>
    </nav>

    
  )
}

export default Header
