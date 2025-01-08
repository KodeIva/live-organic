import React from 'react'
import OrangeFresh from '../../assets/orange-fresh.jpg'

const About = () => {
  return (
    <section>
      <div>
        <div>
            <img src={OrangeFresh} 
                 alt="orange" 
                 className='w-[300px] md:max-w-[400px] h-full object-cover'
            />
        </div>
        <div>
            <h1>Who We Are</h1>
        </div>
      </div>
    </section>
  )
}


export default About