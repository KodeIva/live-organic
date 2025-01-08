import React from 'react'
import OrangeFresh from '../../assets/orange-fresh.jpg'
import {motion} from 'framer-motion'
import { FadeLeft } from '../../utility/animation';

const About = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 mt-6 py-14'>
        <div className='flex justify-center items-center'>
            <img src={OrangeFresh} 
                 alt="orange" 
                 className='w-[300px] md:max-w-[400px] h-full object-cover'
            />
        </div>
        <div className='flex flex-col  justify-center'>
            <h1>Who We Are</h1>
            <p>
               We are more than just a store, we are committed to promote health,
               sustainability, and ethical choises. We bring organic foods directly 
               from the earth to your home. Our mission is to make organic living 
               accessible to everyone, protect the planet and support ethical
               farming practises
            </p>
            <motion.div 
                variants={FadeLeft(0.9)}
                initial='hidden'
                animate='vissible'
                className='flex justify-center md:justify-center'>
                
                <button className='primary-btn flex justify-center align-center gap-2'>
                  Learn More
                </button>
              </motion.div>
        </div>
      </div>
    </section>
  )
}


export default About