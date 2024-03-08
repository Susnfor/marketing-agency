import {useRef} from 'react'
import Image from 'next/image'
import {motion, useTransform, useScroll, easeInOut} from 'framer-motion'


type ShowcaseCardProps = {
    source: any,
    phrase: string,
    left: boolean
}

type CardProps = {
    source: any,
    phrase: string,

}
const cardVariants = {
  initial: {
      opacity: 0,
      // x:-300,
  },
  animate: {
      opacity: 1,
      // x: 0,
      transition: {
          duration: 1,
          staggerChildren: 0.5
      }
  }
  
}


export const LeftCard = ({source, phrase}:CardProps) => {
  return (
    <div className='flex justify-between sm:mx-32 rounded-lg w-full'>
         <div className='w-80 h-80 relative flex justify-center items-center'>
            <div className='md:w-72 md:h-72 relative  w-40 h-40'>
            <Image src={source} alt="card img" fill style={{objectFit: "cover", borderRadius: "30px"}}/>
            </div>
        </div>
        <div className='px-2  w-full items-center flex relative'> 
        <h1 className='w-full text-center'>{phrase}</h1>
        </div>
    </div>
  )
}

export const RightCard = ({source, phrase}: CardProps) => {
  return (
    <div className='flex justify-between sm:mx-32 rounded-lg  w-full '>
         <div className=' px-2  w-full items-center flex relative '> 
        < h1 className='w-full text-center'>{phrase}</h1>
        </div>
        <div className='w-80 h-80 relative flex justify-center items-center'>
            <div className='md:w-72 md:h-72 relative  w-40 h-40 '>
            <Image src={source} alt="card img" fill style={{objectFit: "cover", borderRadius: "30px"}}/>
            </div>
        </div>
    </div>
  )
}

export const ShowcaseCard = ({source, phrase, left}: ShowcaseCardProps) => {
  const ref=useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
    offset: ["end end", "start end"],


  });
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const leftAnimate = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"], {ease: easeInOut});
  const rightAnimate = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityAnimate = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className='w-full h-80  text-extra  my-10 relative' ref={ref}>
        <motion.div 
        style={left ? {x: leftAnimate, opacity: opacityAnimate} : {x: rightAnimate, opacity: opacityAnimate} }
        // variants={cardVariants} initial='initial' whileInView='animate'
         id='image-text' className='flex justify-between lg:mx-32 rounded-lg relative px-2 bg-third/10 border border-6 outline-4 outline-indigo-500 border-indigo-500 '>

            {
                left ? (
                    <LeftCard source={source} phrase={phrase} />

                )
                :
                (
                    <RightCard source={source} phrase={phrase} />
                    
                )



            }


        </motion.div>
    </div>
  )
}
