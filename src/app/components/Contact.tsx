import React from 'react'
import Image from 'next/image'
import contact from '../assets/contact.jpg'

export const 
Contact = () => {
  return (
    <div className='h-screen w-full flex justify-center '>
        <div className='h-full w-9/12 flex items-center flex-col sm:flex-row'>
        <div className=' relative  w-96 h-96'>
            <Image src={contact} alt="contact" fill style={{objectFit: "cover", borderRadius: "30px"}}/>
        </div>
    <div className='h-4/6 border rounded-3xl px-12 outline-4 outline-indigo-500 border-indigo-500 backdrop-blur-md bg-third/10 text-extra mx-4  flex flex-col justify-center'>
        <div className='text-center'>
            <h1 className='text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Contact</h1>
            <p>For any questions or concerns, please feel free to reach out to us at 123-456-7890</p>
        </div>
        <form className='flex flex-col  items-center'>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div> 
            <div className='relative bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center  w-52 py-[1px] '>
        <button type='submit' className='  w-[99%] py-4  bg-black  hover:bg-transparent text-white uppercase font-bold text-xs transition-colors'>Submit</button>
        </div>
        </form>
    </div>
    </div>
    </div>
  )
}
