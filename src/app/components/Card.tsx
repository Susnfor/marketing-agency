import React from 'react'
import Image from 'next/image'


type CardProps = {
    title: string;
    details: string;
    img: any;
}

export const Card = ({title, details, img}: CardProps) => {
  return (
    <div id='card' className='relative w-48 h-48 lg:w-60 lg:h-60'>
        <div id='card-img' className='w-full h-full relative'>
            <Image src={img} alt="card img" fill style={{objectFit: "cover", borderTopLeftRadius: "30px", borderBottomRightRadius: "30px"}}/>

        </div>
        <div className='text-extra'>{title}</div>
        <div id='card-text' className='opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-50 top-0 absolute w-full h-full px-1 text-center transition-opacity' style={{borderTopLeftRadius: "30px", borderBottomRightRadius: "30px"}}>
            <div className='py-2'>
            <p className='text-white'>{details}</p>
            </div>
        </div>
        <div>
            <h3 className='text-third'>Learn More</h3>
        </div>

    </div>
  )
}
