import React from 'react';




function Contacts(){


    return(
        <div name='contacts' className='w-full h-screen bg-[#0a192f] px-4 text-gray-300 flex items-center justify-center'>
           
                <form method='POST' action="https://getform.io/f/f33a69d3-f10e-45b6-80d7-7bb8d8438fbb" className='flex flex-col justify-center max-w-[600px] w-full'>
                    <div className='py-8'>
                        <p className='font-bold text-4xl text-gray-300 border-b-4 border-pink-600 inline-block'>Contacts</p>
                        <p className='text-gray-400 py-2'>Submit the form below or send me an email - danFabian167@gmail.com</p>
                    </div>
                    <input className='my-2 py-2 px-2 bg-[#ccd6f6] cursor-pointer' type="text" placeholder='Enter your name' name="name" id=""/>
                    <input className='my-2 py-2 px-2 bg-[#ccd6f6] cursor-pointer' type="email" placeholder='Enter your email' name="email" id="" />
                    <textarea className='my-2 px-2 bg-[#ccd6f6] cursor-pointer text-gray-900' name="textarea" id="" placeholder='Message' cols="30" rows="10"></textarea>
                    <button className='text-white border-2 font-bold items-center w-[200px] mx-auto p-2 my-4 hover:bg-pink-500 hover:border-pink-500'>Let's Collaborate</button>

                </form>
            
        </div>
    )
}


export default Contacts;