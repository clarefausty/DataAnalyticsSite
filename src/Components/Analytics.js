import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

function Analytics() {
  return (
    <div className='bg-white py-16 px-2 w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center '>
            <img className='w-[500px] mx-auto my-4' src='/Assets/Analytic-image.jpg' alt=''/>
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold '>Data Analytics Dashboard</p>
                <h1 className='font-bold py-2 md:text-4xl sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
                <LoremIpsum p={1} />
                <button className='text-[#00df9a] rounded-md w-[200px] font-medium px-6 py-3  mx-auto my-6 bg-black md:mx-0 hover:bg-[#00df9a] hover:text-white'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics