import React from 'react'
import { PriceBox } from './PriceBox';

export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];

export const Pricing = () => {
  return (
    <div className='pb-20 bg-third/10'>
        <div className='text-center pb-20 pt-36'>
            <h1 className='text-4xl bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Pricing</h1>
            <p className='text-extra'>Choose the plan that fits your needs.</p>
            <h1 className='text-3xl text-extra '>Pay once, use forever</h1>
        </div>
        <div className='flex gap-5 px-20 justify-evenly flex-col sm:flex-row'>
            <PriceBox />
            <PriceBox />
            <PriceBox />
        </div>
    </div>
  )
}
