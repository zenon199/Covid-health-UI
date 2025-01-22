// import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return ( <header>
        <div className='container py-5 flex items-center justify-between'>
            <div>
               < img src={Logo} alt="" className='w-40' />
            </div>
            <ul className='hidden md:flex items-center gap-5'>
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
  </header>
  )
}

export default Navbar