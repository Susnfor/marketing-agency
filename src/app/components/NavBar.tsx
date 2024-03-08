'use client'
import React, { useState } from "react";
import { ThemeChange } from "./ThemeChange";
import { ChartBarIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {motion} from 'framer-motion'


type ToggleProps = {
  isDark: boolean;
  setIsDark: any;
};
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const NavBar = ({ isDark, setIsDark }: ToggleProps) => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      name: "About",
      path: "#expertise",
    },
    {
      name: "Services",
      path: "#showcase",
    },
    {
      name: "Pricing",
      path: "#pricing",
    },
   
    {
      name: "Contact",
      path: "#contact",
    }
  ]

  return (
    <div className="w-full h-20 top-0 sticky z-50 ">


      <motion.nav className="w-full navbar flex items-center justify-between p-5 border-b-[1px] z-50 backdrop-blur-md  ">
          <Link href="/" className="flex items-center gap-2 ">
            <ChartBarIcon className="h-10 w-10 text-third hover:text-secondary" />
          </Link>

        <ul className="sm:flex items-center gap-5 hidden ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-base text-secondary hover:text-third"
            >
              {link.name}
            </Link>
          ))}
          <ThemeChange
            handleChange={() => setIsDark(!isDark)}
            isChecked={isDark}
          />
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
        <ThemeChange
            handleChange={() => setIsDark(!isDark)}
            isChecked={isDark}
          />
             <Bars3BottomRightIcon className="w-6 h-6 text-secondary" onClick={() => setToggle(!toggle)}/>
            
              <div 
              className={`${toggle ? 'animate-menu-open ' : 'animate-menu-close sr-only '} 
               flex w-full h-screen bg-primary absolute top-0 left-0 flex-col justify-center items-center gap-10  `} 
              > 
              <XMarkIcon className="w-6 h-6 text-secondary " onClick={() => setToggle(!toggle)}/> 
            

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-xl text-secondary hover:text-third"
                  onClick={() => setToggle(!toggle)}
                >
                  {link.name}
                </Link>
              ))}
              
              </div>



            

        </div>
      </motion.nav>



    </div>
  );
};
