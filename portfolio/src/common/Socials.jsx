import React from 'react';
import NavData from '../NavData'

function Socials(){


    return(
        <div className='hidden lg:flex  fixed left-0 top-[35%] '>
            <ul>
                {NavData.map(data=>(
                   <li style={{backgroundColor:`${data.bg}`}} className={`w-[140px] h-[50px] px-2 flex justify-between font-bold text-xl items-center ml-[-90px] hover:ml-[-2px] duration-300 transition-all ease-in-out`}>
                        <a href="/" className='flex items-center w-full text-gray-300 justify-between gap-1'>
                            {data.title} {data.icon}
                        </a>
                    </li> 
                ))}
                    
               
            </ul>
            
        </div>
    )
}

export default Socials;  