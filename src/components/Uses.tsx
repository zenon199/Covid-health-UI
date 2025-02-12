// import React from 'react'
import a from '../assets/11.png';
import b from '../assets/22.png';
import c from '../assets/33.png';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from './animations';

function Uses() {
    return <section>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">               
                <motion.div
                    variants={SlideRight(0.2)}
                    whileInView={'animate'}
                    initial= 'initial' 
                    className="flex flex-col justify-center xl:pr-14">
                            <h1 className="text-3xl font-bold text-darkBlue">
                                How to Use it..
                            </h1>
                            <p className=" text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum unde dicta!
                            </p>
                            <p className="text-sm text-gray-400 mt-4 ">
                                Lorem ipsum dolor  adipisicing elit. Autem tempore qui voluptatem.
                                <a href="#" className="text-primary">
                                    Learn More
                                </a>
                            </p>
                            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg
                                hover:bg-primary hover:text-white transform duration-300">
                                Get in Touch
                            </button>
                </motion.div>
                <motion.div
                    variants={SlideLeft(0.4)}
                    whileInView={'animate'}
                    initial= 'initial' >
                    <img src={a} alt='' className='w-full rounded-3xl'/>
                    <p className='text-xl text-gray-400 mt-4'>Corona Virus</p>
                </motion.div>
                <motion.div
                    variants={SlideLeft(0.6)}
                    whileInView={'animate'}
                    initial= 'initial' >
                    <img src={b} alt='' className='w-full rounded-3xl'/>
                    <p className='text-xl text-gray-400 mt-4'>Diagnostics</p>
                </motion.div>
                <motion.div
                    variants={SlideLeft(0.8)}
                    whileInView={'animate'}
                    initial= 'initial' >
                    <img src={c} alt='' className='w-full rounded-3xl'/>
                    <p className='text-xl text-gray-400 mt-4'>Symptoms</p>
                </motion.div>
            </div>
      </div>
  </section>
}

export default Uses