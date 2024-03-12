import React, { useRef, useState, useEffect } from 'react'
import heroimg from '../assets/heroimg.jpg'
import bg from '../assets/bg.jpg'
// import shapesbg from '../assets/shapesbg.svg'
import white from '../assets/white.svg'
import black from '../assets/black.svg'
import blurfooter from '../assets/blurfooter.png'
import thelogo from '../assets/l2.svg'
import Image from 'next/image'
import { ScrollParallax, MouseParallax } from 'react-just-parallax'
import { SparklesIcon, BuildingStorefrontIcon, FilmIcon, UserIcon, BanknotesIcon } from '@heroicons/react/24/solid'

import {motion}    from 'framer-motion'

import { CompanyLogos } from './CompanyLogos'

export function Dot() {
  return (
    <div className='text-blue-500 text-5xl  -mt-6 '>
      .
    </div>
  )
}



export const Hero = ({isDark}: any) => {

  const parallaxRef = useRef(null);



//   const backgroundImageStyle = {
//     backgroundImage: `url(/images/heroimg.jpg)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     zIndex: -1,

// }

  return (
    <div className="text-secondary">
        <div id='main-hero' className="  h-screen w-full overflow" ref={parallaxRef}
        // style={backgroundImageStyle}
        >
          
            <div className='flex flex-col items-center justify-center text-center z-30 lg:text-8xl sm:text-7xl text-5xl py-40 transition-all duration-200 ease-in-out'> 
            <MouseParallax zIndex={30} strength={0.02}>
            <div className='flex flex-col items-center '>
            <h1 className='z-30'>We Build <br className=''/>
            
            <span className='font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Digital</span> 
            
            <br className=' z-30'/>Experiences</h1>
            
            <div className='z-30 md:text-xl text-base py-5 uppercase' >
            <h3 className='flex z-30 '>Website<Dot/> Branding<Dot/> Digital Marketing</h3>
            </div>
            </div>
            </MouseParallax>
           
            <div>

            </div>
            </div>
        </div>
        <div id='companylogos' className='pb-48'>
        
          <CompanyLogos img={thelogo}/>
    

        </div>

            <div id='about-sec' className='=relative pb-28'>
              <div className='text-center lg:px-80 px-10 pb-10 '>
            <h1 className='font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-4xl pb-4'>The last digital agency youll ever need</h1>
            <p className='text-extra'>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
            </div>

            {/* <ScrollParallax strength={0.03}> */}
            
            <div className='flex items-center justify-evenly' >
              
            <div id='boxes' className='py-10 justify-around flex gap-5 flex-wrap'>
              <div className='w-72'>
              <BanknotesIcon className='h-10 w-10 text-extra hover:text-secondary'/>
              <h3 className='pt-4 font-bold text-extra text-lg'>Banking</h3>
              <p>Suspendisse ut magna porttitor, sollicitudin</p>
              </div>
              <div className='w-72'>
              <BuildingStorefrontIcon className='h-10 w-10 text-extra hover:text-secondary'/>
              <h3 className='pt-4 font-bold text-extra text-lg'>Business</h3>
              <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</p>
              </div>
              <div className='w-72'>
              <FilmIcon className='h-10 w-10 text-extra hover:text-secondary'/>
              <h3 className='pt-4 font-bold text-extra text-lg'>Video</h3>
              <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</p>
              </div>
              <div className='w-72'>
              <UserIcon className='h-10 w-10 text-extra hover:text-secondary'/>
              <h3 className='pt-4 font-bold text-extra text-lg'>Customer</h3>
              <p>Suspendisse ut magna porttitor, sollicitudin ligula at, </p>
              </div>
              </div>
              

            </div>
            {/* </ScrollParallax> */}
            
            

              
            </div>
     
            
    <div id='bg' className={`${isDark  ? 'hidden' : 'visible'} overflow-hidden`}>
      <MouseParallax isAbsolutelyPositioned strength={0.1}>
        <div className='top-0 left-0 right-0 w-full h-full absolute overflow-x-hidden' >
          <Image src={black} alt="hero image" fill={true} style={{objectFit: "cover"}}/>
        </div>
        </MouseParallax>
      
        
        </div>
        <div id='bg' className={`${!isDark ? 'hidden' : 'visible'} overflow-hidden`}>
      <MouseParallax isAbsolutelyPositioned strength={0.1}>
        <div className='top-0 left-0 right-0 w-full h-full absolute overflow-x-hidden' >
          <Image src={white} alt="hero image" fill={true} style={{objectFit: "cover"}}/>
        </div>
        </MouseParallax>
      
        
        </div>

    </div>
  )
}
