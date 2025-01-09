import React from 'react'
import OrangeFresh from '../../assets/orange-fresh.jpg'
import {motion} from 'framer-motion'
import { FadeUp } from '../../utility/animation';

const About = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 mt-6 py-14'>
        <div className='flex justify-center items-center'>
            <motion.img
              initial={{opacity: 0, scale: 0.5}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{type: 'spring', stiffness: 100, delay: 0.2}}
              viewport={{once: true}}
              src={OrangeFresh} 
              alt="orange" 
              className='w-[300px] md:max-w-[400px] h-full object-cover'
            />
        </div>
        <div className='flex flex-col  justify-center '>
          <div className='text-center md:text-left mt-4 lg:max-w-[400px]'>
            <motion.h1 
              variants={FadeUp(0.5)}
              initial='hidden'
              whileInView='vissible'
              viewport={{once: true}}
              className='text-2xl md:text-4xl font-bold text-slate-500'>Who We Are</motion.h1>
            <motion.p 
               variants={FadeUp(0.6)}
               initial='hidden'
               whileInView='vissible'
               viewport={{once: true}}
               >
               We are more than just a store, we are committed to promote health,
               sustainability, and ethical choises. We bring organic foods directly 
               from the earth to your home. Our mission is to make organic living 
               accessible to everyone, protect the planet and support ethical
               farming practises
            </motion.p>
            <motion.div 
                variants={FadeUp(0.9)}
                initial='hidden'
                animate='vissible'
                viewport={{once: true}}
                className='flex justify-center md:justify-center'>
                
                <motion.button 
                   variants={FadeUp(0.9)}
                initial='hidden'
                animate='vissible'
                viewport={{once: true}}
                  className='primary-btn flex justify-center align-center gap-2'>
                  Learn More
                </motion.button>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  )
}


export default About