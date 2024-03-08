import React from 'react'
import { ShowcaseCard } from './ShowcaseCard'
import e1 from '../assets/e1.jpg'
import stock1 from '../assets/stock1.jpg'
import stock2 from '../assets/stock2.jpg' 
import stock5 from '../assets/stock5.jpg'

import { Card } from './Card'

export const Showcase = () => {
  return (
    <div className='min-w-screen min-h-screen flex justify-center bg-third/10' >
      <div className='w-11/12 h-11/12  backdrop-blur-md  rounded-xl  '>
        <div id="showcase-img" className='w-full h-full '>
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
