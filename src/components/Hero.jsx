
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import characterGif from '../assets/caracter.webm'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'> 
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#a1b6ff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white  `}>Ayoub <span className='text-[#a1b6ff]'>Belkhadir</span> </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        Développeur Full-Stack & Designer
        <br className='sm:block hidden'/>
        Des interfaces fluides, du code robuste.     
        </p>
      </div>
      <div>
      <video
        src={characterGif}
        autoPlay
        muted
        playsInline
        className="w-[300px] sm:w-[150px] md:w-[250px] h-auto object-contain pointer-events-none select-none"
      />
      </div>
    </div>
    <ComputersCanvas/>
    <div className='absolute xs:bottom-10 bottom-32 w-full justify-center items-center'>
      <a href="#about">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#6989fd] flex justify-center items-start p-2 m-auto'>
        <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType:'loop'

            }}
            className="w-3 h-3 rounded-full bg-[#6989fd] mb-1"
            />
         
        </div>
      </a>
    </div>

    </section>
  )
}

export default Hero