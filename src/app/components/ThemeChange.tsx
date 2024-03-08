import React from 'react'
import { MoonIcon, SunIcon  } from '@heroicons/react/24/outline'
type ToggleProps = {
    handleChange: any
    isChecked: boolean
}
export const ThemeChange = ({handleChange, isChecked}: ToggleProps) => {


  return (
    <div className='relative'>
        <span className=''>
        <input type="checkbox" id="check" className='sr-only peer' onChange={handleChange} />
        
        <label htmlFor="check" 
        className=' flex items-center cursor-grab text-xl text-third before:content-[""] before:h-4 before:w-8 before:rounded-2xl before:mr-2 before:bg-secondary after:content-[""] after:h-3 after:w-3 after:rounded-2xl after:bg-third after:absolute after:left-1 peer-checked:after:translate-x-full after:duration-300 after:ease-in-out'
        >

          <span className='hover:animate-spin-slow '> {isChecked ? <SunIcon className='h-6 w-6 text-third'/> : <MoonIcon className='h-6 w-6 text-third'/>}</span> 
        </label>
        </span>

    
    </div>
  )
}
