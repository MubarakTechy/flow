import React from 'react'
import Max1 from '../image/Photo (2).png'

const Join = () => {
  return (
    <div className='flex justify-center items-center  max-sm:flex-col overflow-hidden bg-[#022C22] p-10 '>
        <div className='flex items-center max-sm:flex-col gap-10 '>
            <div className='flex flex-col gap-4'>
               <h1 className='text-[35px] text-[white] '>Join the green movement</h1>
                <p className='text-[white]'>Our commitment to green energy is paving the way for a cleaner, <br /> healthier planet. </p>
                <input type="button" value="Get in to touch" className=' max-sm:w-[40%]  w-[8vw] p-3 rounded-[25px] text-[13px] bg-[#BEF264] text-[white] font-bold' />
            </div>
            <div>
                <img src={Max1} alt="" className='h-[70vh] max-sm:h-[40vh] rounded-[50%] ' />
            </div>
        </div>                            
    </div>

  )
}

export default Join