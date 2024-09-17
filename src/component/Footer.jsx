import React from 'react'
import Flow1 from '../image/Brand Logo (1).png';

import Flow2 from '../image/Icon (4).png';
import Flow3 from '../image/Icon (5).png';
import Flow4 from '../image/Icon (6).png';




const Footer = () => {
  return (
    <div  className=' flex flex-col justify-center items-center p-10'>
         <div className=' flex justify-center items-center gap-10 w-[80vw] max-sm:w-[100vw] max-sm:h-[30vh]  h-[40vh] bg-[#022C22]  rounded-[20px] '>
           <h1 className=' max-sm:w-[40%] max-sm:text-[20px] text-[40px] w-[50%]  text-[white] font-bold '>Your Source for Green Energy Updates</h1>
           <input className=' w-[18w] max-sm:w-[50vw] max-sm:p-2 p-4  bg-white  rounded-[20px] ' type="email" name="" id="" placeholder='Enter your email' />
         </div>
       <div className=' flex justify-center gap-[10vw] p-10  max-sm:flex-col  max-sm:text-left  max-sm:items-start max-sm:justify-start items-center'>
            <><img src={Flow1} alt="" /></>
            <div className=' flex flex-col gap-8' >
                 <div>
                 <h1 className='text-[15px] font-bold '>Platform</h1>
                 </div>
                <p>How to work</p>
                <p>Pricing</p>
                <p>Solutions</p>
            </div>
            <div className=' flex flex-col gap-8'>
              <h1 className='text-[15px] font-bold '>Company</h1>
                <p>Our Mission</p>
                <p>Contact</p>
                <p>Career</p>
              </div>
            <div className=' flex flex-col gap-8'>
              <h1 className='text-[15px] font-bold '>Resources</h1>
                <p>blog</p>
                <p>service</p>
                <p>Support</p>
                <p>Help  center </p>
            </div>
            <div className=' flex flex-col gap-8'>
              <div className=' flex items-center gap-3'>
                <img src={Flow2} alt="" />
                <p className='font-bold'>Follow us on Facebook</p>
              </div>
              <div className=' flex items-center gap-3'>
                <img src={Flow3} alt="" />
                <p className='font-bold'>Follow us on Instagram</p>
              </div>
              <div className=' flex items-center gap-3'>
                <img src={Flow4} alt="" />
                <p className='font-bold'>Follow us on Linkedin</p>
              </div>
            </div>
       </div>

    </div>
  )
}

export default Footer