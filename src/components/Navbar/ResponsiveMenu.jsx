import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence>       
    {
      open &&  <motion.div animate={{}}>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.div>              
    }
     </AnimatePresence>

  )
}

export default ResponsiveMenu