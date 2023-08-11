import React from 'react';
import WorkData from '../workData'


function Works(){

    return(
        <div name='Works' className='w-full md:h-screen bg-[#0a192f] text-gray-300 px-4'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full w-full'>
                <div className=''>
                    <div className='py-4'>
                        <p className='text-4xl font-bold border-b-4 border-pink-600 inline-block'>Work</p>
                        <p className='text-gray-400 py-2'>Check out some of my recent work</p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {WorkData.map(data=>(
                            <div style={{backgroundImage:`url(${data.image})`}} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div'>

                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-gray-300 tracking-wider'>{data.title}</span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center px-4 py-1 font-bold text-lg bg-white text-gray-700 rounded ml-2 '>Demo</button>
                                    </a>

                                    <a href="/">
                                        <button className='text-center px-4 py-1 font-bold text-lg bg-white text-gray-700 rounded ml-2 '>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}

                    

                    </div>
                


                </div>

            </div>
        </div>
    )
} 

export default Works;