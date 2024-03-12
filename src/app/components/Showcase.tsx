import React from 'react'
import { ShowcaseCard } from './ShowcaseCard'
import e1 from '../assets/e1.jpg'
import stock1 from '../assets/stock1.jpg'
import stock2 from '../assets/stock2.jpg' 
import stock5 from '../assets/stock5.jpg'

import { Card } from './Card'

export const Showcase = () => {
  return (
    <div className='min-h-screen flex justify-center bg-third/10 ' >
      <div className='w-11/12 h-full  rounded-xl  '>
        <div className=' h-48 w-full flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>What we offer</h1>
          <p className='text-xl text-extra'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel purus ut velit tristique elementum.</p>
        </div>
        <div id="showcase-img" className=' h-full pb-20 overflow-hidden '>
        {/* <Card title={'Web Design and Development'} details={'Details of the Service,Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. '} img={stock2}/> */}
        <ShowcaseCard source={stock2} left={true} phrase={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel purus ut velit tristique elementum.'} />
        <ShowcaseCard source={stock1} left={false} phrase={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel purus ut velit tristique elementum.'}/>
        <ShowcaseCard source={stock5} left={true} phrase={'Lorem ipsum dolor'}/>
        <ShowcaseCard source={stock1} left={false} phrase={'Lorem ipsum dolor sit amet, consectetur '}/>
        </div>



      </div>





    </div>
  )
}
