import React from 'react'
import Slider from './Slider'

const About = () => {
  return (
    <div className='text-gray-400 max-w-[1200px] mx-auto my-12' id="about">
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex  py-6 md:py-0'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me </h2>
            <p className='text-base lg:text:lg'>
              I'm a motivated college student and an intern with a solid foundation in web development technologies, including HTML, CSS, JavaScript, Express, Node.js, the MERN stack, and SQL. Your hands-on experience with both frontend and backend development showcases your ability to build full-stack
              applications, making you a versatile developer eager to learn and grow in the industry.
            </p>
          </div>
        </div>
        {/* <img className='mx-auto rounded-xl py-8 md:py-0' src='./src/assets/images/Muskan_img.jpeg' width={300} height={300}></img> */}
        <Slider />
      </div>

    </div>
  )
}

export default About