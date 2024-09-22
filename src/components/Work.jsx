import React from 'react';

const Work = () => {
    const projects = [
        {
            imgSrc: './src/assets/images/project1.jpg',
            title: 'Project 1',
            description: 'A brief description of Project One.',
            link: ''
        },
        {
            imgSrc: './src/assets/images/project1.jpg',
            title: 'Project 2',
            description: 'A brief description of Project Two.',
            link: ''
        },
        {
            imgSrc: './src/assets/images/project1.jpg',
            title: 'Project 3',
            description: 'A brief description of Project Three.',
            link: ''
        },
    ];

    return (
        <div className='bg-black text-gray-400 max-w-[1200px] mx-auto p-6' id="work">
            <h2 className='text-gray-400 text-2xl md:text-4xl font-bold mb-6 text-center'>
                My Work
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className='bg-black border border-gray-400 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 '
                    >
                        <img 
                            src={project.imgSrc} 
                            alt={project.title} 
                            className='h-40 w-full object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-lg font-bold text-gray-200'>{project.title}</h3>
                            <p className='mt-2 text-gray-400'>{project.description}</p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='mt-4 inline-block px-4 py-2 bg-gray-700 text-gray-200 rounded hover:bg-gray-500'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
