import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import Fruits from '../../assets/fruits.png'

const Hero = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
          {/*Brand info */}
          <div className='flex flex-col justify-center py-10 md:py-0 relative z-10'>
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
              <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose 
                 font-averia'>
                Healthy <br />
                Fresh 
                <span className='text-[#FF885B]'> Fruits!</span> 
              </h1>
              <p className='text-2xl tracking-wide'>Order Your Freshness Of Life</p>
              <p className='text-gray-500'>Step into a world where nature's essence is preserved in any bite.
                Organic food isn't just a choice, it's selebration of health, harmony
                and sustainability - an invitation to savour life the way it was meant to be.
                Order now and get 20% off.
              </p>
              <div className='flex justify-center md:justify-center'>
                
                <button className='primary-btn flex justify-center align-center gap-2'>
                  <span className='self-center text-xl'><MdOutlineShoppingBag/></span>
                  Order Now</button>
              </div>
            </div>
          </div>

          {/*Hero images */}
          <div className='flex justify-center items-center'>
            <img src={Fruits} alt="" className='w-[350px] md:w-[550px]
             drop-shadow-xl' />
          </div>
        </div>
    
    </section>
  )
}

export default Hero             