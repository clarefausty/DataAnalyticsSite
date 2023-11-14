import React from 'react'

function Newsletter() {
  return (
    <div className='w-full  py-16 text-white px-4 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold  py-2'>Wants tips and tricks to optimise your flow?</h1>
                <p>Sign up to our newsletter and stay upto date</p>
            </div>
            <div>
                <div className=' items-center flex flex-col sm:flex-row justify-between w-full my-4 '>
                    <input className=' outline-[#00df9a] p-3 rounded-md w-full text-black '  type='email' placeholder='Enter email'/>
                    <button type='submit' className='bg-[#00df9a] hover:text-white  rounded-md w-[200px] font-medium px-6 py-3  mx-auto my-6 ml-4 text-black'>Notify me</button>
                </div>
                <p>We care about the protection of your data<span className='text-[#00df9a]'>Read our privacy policy</span></p>
            </div>
        </div>

    </div>
  )
}

export default Newsletter