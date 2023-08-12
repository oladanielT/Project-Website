import React from 'react';
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className=' max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4'>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl text-white font-bold sm:text-7xl'>Daniel Fabian</h1>
        <h2 className='text-4xl text-[#8892b0] sm:text-7xl font-bold'>I'm a FrontEnd Web Developer.</h2>
        <p className='text-[#8892b0] py-4 md:max-w-[700px]'>I'm a FrontEnd web developer specializing in building (and occasionally designing) exceptional degitail experience. Currently i'm focused on building responsive website interface </p>

        <div>
          <Link className='cursor-pointer'  to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
              <span className='ml-2 group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight /> 
              </span>
           
           </button>              
          </Link>
         
        </div>

      </div>
    </div>
  )
}

export default Home