import React from 'react'

function Card(props) {
  return (
    
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src='' alt=''/>
            <h2 className='text-2xl font-bold text-center py-8 '>{props.title}</h2>
            <p className='text-center text-4xl font-bold '>{props.cost}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'> {props.capacity}</p>
                <p className='py-2 border-b mx-8 '> {props.userNo}</p>
                <p className='py-2 border-b mx-8 '> {props.limit}</p>
            </div>
            <button className='bg-[#00df9a] mx-auto px-10 font-medium mt-4 rounded-md py-3 my-6 w-[200px]'>Start trial</button>
        </div>

  )
}

export default Card