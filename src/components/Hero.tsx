// import React from 'react'
import HeroImage from'../assets/hero.png'

const Hero = () => {
    return ( <section>
        <div className='bg-brandWhite rounded-2xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]'>
            <div className='flex flex-col justify-center gap-3'>
                <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-4 text-center md:text-left'>
                    <h1 className='text-5xl font-bold text-darkBlue'>
                        COVID-19 Risk <br /> Assesment Tool
                    </h1>
                    <p className='text-lg text-gray-400 mt-4'>
                        A set of solutions designed to help quickly identify
                        corona virus symptoms and get reliable informations 
                        regarding COVID-19 concerns.
                    </p>
                    <div className='bg-primary text-white px-4 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200'>
                        <button>See how to use it</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={HeroImage} alt='' className='' />
            </div>
        </div>
    </section>
  )
}

export default Hero