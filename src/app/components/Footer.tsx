import React from 'react'
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/discord'
import 'react-social-icons/twitter'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import blurfooter from '../assets/blurfooter.png'
import Image from 'next/image'


export const Footer = ({isDark}: any) => {

  const SITEMAP = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
      title: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];

  const iconsfooter = [
    {
      title: "Discord",
      url: "https://discord.gg/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/",
    },
    {
      title: "GitHub",
      url: "https://github.com/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/",
    },
    
  ]

  return (
    <div className='w-full flex text-third py-5 px-10 border-t-[1px] relative shadow-md'>
      <div className=' w-full '>
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      <ul className='flex gap-5 '>
        {
          iconsfooter.map((item, index) => (
            <li key={index} className='hover:bg-third rounded-full bg-third/50'>
              <SocialIcon url={item.url} style={{ height: 30, width: 30}} bgColor="#6A758A44" />
            </li>
          ))
        }
      </ul>
      {
        isDark ? (

          <div className='top-0 h-full' >
          <Image src={blurfooter} alt="hero image" fill={true} style={{objectFit: "cover"}}/>
        </div>
          ) :
          (
            ''
          )
      }

    </div>
  )
}
