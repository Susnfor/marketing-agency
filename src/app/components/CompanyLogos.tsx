import React from 'react'
import logo2 from '../assets/l2.svg'
import yourlogo from '../assets/yourlogo.svg'
import Image from 'next/image';
import {motion} from 'framer-motion'

export const companyLogos = [logo2, yourlogo, logo2, yourlogo, logo2];
const logoVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}

export const CompanyLogos = (img: any) => {


  return (
    <div>
        <motion.div initial="initial" whileInView="animate" className='text-center text-secondary'>
            <h4  className="font-bold text-gray-400 text-base pb-4">Companies We Work With</h4>
            <ul className='flex justify-evenly items-center flex-1 '>
                {
                    companyLogos.map((item, index) => (
                        <motion.li 
                        variants={logoVariants}
                        key={index} className='w-1/6 p-2'>
                            <Image src={item} alt="company logo" height={100} width={100}/>
                        </motion.li>
                    ))

                }

            </ul>
        </motion.div>
    </div>
  )
}
