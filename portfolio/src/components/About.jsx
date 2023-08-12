import React from 'react';

function About(){



    return(
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className=' w-full h-full flex flex-col justify-center items-center px-4'>
                <div className='max-w-[900px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pl-4 pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[900px] w-full sm:grid grid-cols-2 gap-8'>
                    <div className='text-4xl font-bold sm:text-right mb-8'>
                        <p>Hi, I'm Daniel, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I'm a front-end web magician, passionate about turning designs into pixel-perfect realities. 
                        With HTML, CSS, TailwindCss, JavaScript and React.js  as my tools, I craft seamless user experiences that blend creativity with functionality.
                         Let's collaborate and bring your digital dreams to life.
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;