import React from 'react';

const Skills = () => {
    return (
        <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
            place-items-center md:flex md:justify-between md:items-center' id="skill">
            <h2 className='text-gray-400 text-2xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack
            </h2>
            {[
                { src: './src/assets/images/html.png', alt: 'HTML', label: 'HTML' },
                { src: './src/assets/images/css.png', alt: 'CSS', label: 'CSS' },
                { src: './src/assets/images/js.png', alt: 'JS', label: 'JAVASCRIPT' },
                { src: './src/assets/images/nodejs.jpg', alt: 'Nodejs', label: 'NODE JS' },
                { src: './src/assets/images/express.png', alt: 'EXPRESS', label: 'EXPRESS' },
                { src: './src/assets/images/mongodb.png', alt: 'MongoDB', label: 'MONGODB' },
                { src: './src/assets/images/react.png', alt: 'React', label: 'REACT' },
            ].map(skill => (
                <div key={skill.label} className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <div className='border-2 border-gray-400  p-1'>
                        <img 
                            src={skill.src} 
                            alt={skill.alt} 
                            className='h-16 w-16 md:h-20 md:w-20 object-contain ' 
                        />
                    </div>
                    <p className='mt-2'>{skill.label}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
