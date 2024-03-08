import React from 'react'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

export const PriceBox = () => {
  return (
    <div className='h-full border border-6 rounded-3xl p-3 outline-4 outline-indigo-500 border-indigo-500 backdrop-blur-md bg-third/10 '>
        <div className='pb-8'>
            <h1 className='text-4xl text-secondary font-bold'>Basic</h1>
            <p className='text-gray-600 text-base'>AI chatbot, personalized recommendations</p>
        </div>
        <div className='pb-8'>
            <h1 className='text-6xl text-fourth font-bold outline-4 outline-indigo-500'>$9.99</h1>
        </div>
        <div className='flex justify-center items-center'>
        <div className='relative w-10/12 py-[1px] bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center '>
        <button className='  w-[99%] py-4  bg-black  hover:bg-transparent text-white uppercase font-bold text-xs transition-colors'>Get Started</button>
        </div>
        </div>
        <ul className='flex flex-col divide-y divide-blue-500 text-extra pt-10 px-4'>
            <li></li>
            <li className='flex py-6'><CheckBadgeIcon width={24} height={24}/>Personalized recommendations based on your preferences</li>
            <li className='flex py-6'><CheckBadgeIcon width={24} height={24}/>Ability to explore the app and its features without any cost</li>
            <li className='flex py-6'><CheckBadgeIcon width={24} height={24}/>Ability to explore the app and its features without any cost</li>
        </ul>
    </div>
  )
}
