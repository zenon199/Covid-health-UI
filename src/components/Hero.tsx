// import React from 'react'
import HeroImage from '../assets/hero.png'
import { motion } from 'framer-motion';
import { Slideup } from './animations';

const Hero = () => {
    return ( <section>
        <div className='bg-brandWhite rounded-2xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]'>
            <div className='flex flex-col justify-center gap-3'>
                <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-4 text-center md:text-left'>
                    <motion.h1
                        variants={Slideup(0.2)}
                        initial='initial'
                        whileInView='animate'
                        className='text-5xl font-bold text-darkBlue'>
                        COVID-19 Risk <br /> Assesment Tool
                    </motion.h1>
                    <motion.p
                        variants={Slideup(0.4)}
                        initial='initial'
                        whileInView='animate'
                        className='text-lg text-gray-400 mt-4'>
                        A set of solutions designed to help
                         quickly identify
                        corona virus symptoms and get reliable informations 
                        regarding COVID-19 concerns.
                    </motion.p>
                    <motion.div
                        variants={Slideup(0.6)}
                        initial='initial'
                        whileInView='animate'
                        className='bg-primary text-white px-4 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200'>
                        <button>See how to use it</button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{duration: 0.5}}
                initial ={{ opacity: 0, scale: 0.5}}
                className='flex items-center justify-center'>
                <img src={HeroImage} alt='' className='' />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero