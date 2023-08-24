import React from 'react'
import Typed from "react-typed"

function Hero() {
  return (
    <div className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] uppercase font-bold p-2'>Growing with data analysis</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                Fast, flexible financing for
                </p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 '
            strings={[
                'BTC',
                'SAAS',
                'BTB']}
                typeSpeed={120}
                backSpeed={140}
                loop 
            />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, SAAS platforms.</p>
        <button className='bg-[#00df9a] rounded-md w-[200px] font-medium px-6 py-3  mx-auto my-6'>Get Started</button>
    </div>
  )
}

export default Hero