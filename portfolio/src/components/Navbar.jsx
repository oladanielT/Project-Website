import React , {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Socials from '../common/Socials';



function Navbar(){
    const [show, setShow] = useState(false);


    return(
        <div className='fixed w-full h-[80px] flex items-center justify-between bg-[#0a192f] text-gray-400 px-6 border-b-2 border-gray-800'>
            <div>
                <img className='text-pink-600' src="" alt="logo" />
            </div>
            <div className=''>
                <ul className='hidden md:flex items-center font-bold'>
                    <li className='mx-3'>Home</li>
                    <li className='mx-3'>About</li>
                    <li className='mx-3'>Skills</li>
                    <li className='mx-3'>Works</li>
                    <li className='mx-3'>Contact</li>
                </ul>
            </div>
            <div className='block md:hidden' onClick={()=>setShow(!show)}>
                {
                    show?
                    <AiOutlineClose size={30}/>
                    :
                    <AiOutlineMenu size={30}/>
                }
            </div>
          
            <div className={` fixed ${show?"left-0 ":'left-[-100%]'} top-[82px] w-full h-screen flex flex-col justify-center text-3xl items-center bg-[#0a192f] py-4 md:hidden ease-in-out duration-300 transition-all z-10`} >
                <ul className='flex flex-col justify-center font-bold'>
                    <li className='p-4 cursor-pointer'>Home</li>
                    <li className='p-4 cursor-pointer'>About</li>
                    <li className='p-4 cursor-pointer'>Skills</li>
                    <li className='p-4 cursor-pointer'>Works</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>
            </div>
            <Socials/>

            

        </div>
    )
}

export default Navbar;