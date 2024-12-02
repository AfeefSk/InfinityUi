import React from 'react'
import { motion } from "framer-motion";

const Card = ({ imgSrc, title, description, footer }) => {

    
  return (
    
       <motion.div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden m-20"
       whileHover={{ scale: 1.2 ,  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.35)"}}
            
       >
      <img src={imgSrc} alt="Card visual" className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div className="px-4 py-3 bg-gray-100 text-sm font-medium text-center">
        {footer}
      </div>
    </motion.div>
    
  )
}

export default Card
