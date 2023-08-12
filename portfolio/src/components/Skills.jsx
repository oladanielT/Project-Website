import React from 'react';
import project from '../assets/project.png';
import javascript from '../assets/JAVASCRIPT.png';
import html from '../assets/html.png';
import github from '../assets/github.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

function Skills(){



    return(
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 px-4'>
            <div className='max-w-[900px] mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='font-bold text-4xl inline-block border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-3 text-gray-400'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-10'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={html} alt="html" />
                        <p className='py-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={project} alt="html" />
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={javascript} alt="html" />
                        <p className='py-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={react} alt="html" />
                        <p className='py-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={github} alt="html" />
                        <p className='py-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 my-2 '>
                        <img className='w-20 mx-auto' src={tailwind} alt="html" />
                        <p className='py-4'>TAILWIND CSS</p>
                    </div>
                </div>
              

            </div>

        </div>
    )
}

export default Skills;