import React from 'react'
import {Card} from './Card'
import bg from '../assets/bg.jpg'
import e1 from '../assets/e1.jpg'
import e2 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'
import e4 from '../assets/e4.jpg'

export const Expertise = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className=''>
        <div className='text-center '>
      <h1 className='font-bold text-center bg-secondary bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-4xl pb-4'>Our Expertise</h1>
      <p className='text-extra lg:px-80 px-10'>Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</p>
      </div>
      <div className='flex gap-7 gap-y-20 items-center justify-center flex-wrap lg:flex-nowrap pt-20'>
            <Card title={'Web Design and Development'} details={'Details of the Service,Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. '} img={e1}/>
            <Card title={'Digital Marketing'} details={'Details of the Service, Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. '} img={e2}/>
            <Card title={'E-Commerce'} details={'Details of the Service,Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. '} img={e3}/>
            <Card title={'Branding & Creative Services'} details={'Details of the Service'} img={e4}/>
            </div>
      </div>
    </div>
  )
}
