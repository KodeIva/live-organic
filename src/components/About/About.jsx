import React from 'react'
import OrangeFresh from '../../assets/orange-fresh.jpg'

export const About = () => {
  return (
    <section>
      <div>
        <div>
            <img src={OrangeFresh} 
                 alt="orange" 
                 className='w-[300px] md:max-w-[400px] h-full object-cover'
            />
        </div>
        
      </div>
    </section>
  )
}
