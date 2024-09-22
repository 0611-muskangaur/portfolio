import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className=' md:h-[70vh] grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
            <div className=' col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>

                <img src="./src/assets/images/my-image.png" alt='hero image'></img>
            </div>
            <div className='col-span-2 px-5 ml-4 my-auto'>
                <h1 className='text-gray-400 text-3xl sm:text-5xl lg:text-8xl font-extrabold'><span className='primary-color'>
                    I'm a
                </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Backend Dev",
                            1000,
                            "Web Designer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Muskan Gaur and I am a Student. Also I have an experience of 3 months as an Intern.
                </p>
                <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl mr-4
    border text-white '>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4
  border text-white '>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero