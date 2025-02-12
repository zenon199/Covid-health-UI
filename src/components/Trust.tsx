// import React from 'react'

import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import { motion } from 'framer-motion';
import { Slideup } from './animations';


const Trust = () => {
    return <section className='bg-brandWhite py-16 mt-20'>
        <div className="container">
            <motion.h1
                variants={Slideup(0.2)}
                initial='initial'
                whileInView='animate'
                className='py-4 text-4xl font-bold text-darkBlue text-center'>
                    Why you can this tools
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    variants={Slideup(0.4)}
                    initial='initial'
                    whileInView='animate'
                    className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
                    <img src={Icon1} alt='' className='md:mx-0 mx-auto'/>
                    <p className='text-3xl font-semibold'>
                        Based on reliable sources
                    </p>
                    <p className=''>
                        We want our tool to be safe and reliable, so its logic is based
                        on the official global information privided by the WHO.
                    </p>
                    <p className='text-sm text-gray-400'>
                        Enhance your preliminary diagonisis and triage with pediatric content
                        <span className='text-primary'>Learn more</span>
                    </p>
                </motion.div>

                <motion.div
                    variants={Slideup(0.6)}
                    initial='initial'
                    whileInView='animate'
                    className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
                    <img src={Icon2} alt='' className='md:mx-0 mx-auto'/>
                    <p className='text-3xl font-semibold'>
                        Based on reliable sources
                    </p>
                    <p className=''>
                        We want our tool to be safe and reliable, so its logic is based
                        on the official global information privided by the WHO.
                    </p>
                    <p className='text-sm text-gray-400'>
                        Enhance your preliminary diagonisis and triage with pediatric content
                        <span className='text-primary'>Learn more</span>
                    </p>
                </motion.div>
            </div>
        </div>
      
  </section>
}

export default Trust