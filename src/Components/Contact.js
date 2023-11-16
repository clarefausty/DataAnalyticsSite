import React from 'react'

const Contact = () => {
  return (
       <div className='bg-white max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
        <form >
            <h1>Contact Us</h1>
            <div >
            <div >
            <label>Name</label>    
            <inpu  type='text' name='name'required/>
            </div>
            <div >
            <label>Phone Number</label> 
            <inpu type='tel' name='tel' required/>
            </div>
            <div >
            <label>Email Address</label> 
            <inpu type='email' name='email' required/>
            </div>
            <div>
            <button type='submit'>Submit</button> 
            </div>
             
            </div>
        </form>
    </div> 

  )
}

export default Contact