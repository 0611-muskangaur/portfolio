import React from 'react'

const Skills = () => {
    return (
        <div className=' bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center' id="skills">
            <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br />Stack
            </h2>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/html.png' alt='HTML' />
                <p className='mt-2'>HTML</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/css.png' alt='CSS' />
                <p className='mt-2'>CSS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/js.png' alt='JS' />
                <p className='mt-2'>JAVASCRIPT</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/nodejs.jpg' alt='Nodejs' />
                <p className='mt-2'>NODE JS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/express.png' alt='EXPRESS' />
                <p className='mt-2'>EXPRESS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/mongodb.png' alt='MongoDB' />
                <p className='mt-2'>MONGODB</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                <img src='./src/assets/images/react.png' alt='React' />
                <p className='mt-2'>REACT</p>
            </div>
        </div>
    )
}

export default Skills