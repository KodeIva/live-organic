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
            <p>
               We are more than just a store, we are committed to promote health,
               sustainability, and ethical choises. We bring organic foods directly 
               from the earth to your home. Our mission is to make organic living 
               accessible to everyone, protect the planet and support ethical
               farming practises
            </p>
        </div>
      </div>
    </section>
  )
}


export default About