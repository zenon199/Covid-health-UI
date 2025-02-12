// import React from 'react'
import Logo from '../assets/logo.png'
import { motion } from 'framer-motion';

const Navbar = () => {
    return (<motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.6}}>
        <div className='container py-5 flex items-center justify-between'>
            <div>
               < img src={Logo} alt="" className='w-40' />
            </div>
            <ul className='text-lg hidden md:flex items-center gap-5'>
                <li>
                    <a href='#'>Products</a>
                </li>
                <li>
                    <a href='#'>Custom Stories</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Blogs</a>
                </li>
            </ul>
            <div>
                <button className='border border-gray-400 px-4 py-3 rounded-lg cursor-pointer hover:bg-primary hover:text-white transform duration-300'>
                    Get in Touch
                </button>
            </div>
            
      </div>
  </motion.header>
  )
}

export default Navbar