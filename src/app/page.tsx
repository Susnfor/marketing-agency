'use client'
import { useState } from "react";
import {NavBar, Hero, Showcase, Testimonial, Expertise, Pricing, Contact, Footer} from './components'

import heroimg from './assets/heroimg.jpg' 

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  
//   const backgroundImageStyle = {
//     backgroundImage: `url(/images/heroimg.jpg)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     zIndex: -1,

// }

  return (
    <main data-theme={isDark ? 'dark' : 'light'} className=" bg-primary transition-colors ease-in-out min-h-screen w-full h-full " 
    // style={backgroundImageStyle}
    >
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <section id="Hero">
      <Hero isDark={isDark}/>
      </section>

      <section id="showcase">
      <Showcase />
      </section>
      
      <section id="expertise">
      <Expertise />
      </section>

      


      <section id='pricing'>
      <Pricing />
      </section>

      {/* <section id="testimonial">
      <Testimonial />
      </section> */}


      <section id="contact">
      <Contact />
      </section>

      <section id="footer" >
      <Footer  isDark={isDark}/>
      </section>

    </main>
  );
}
