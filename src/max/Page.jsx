import React from 'react'
import Forestman from '../image/forest (4).png';
import Harry from '../image/Image (22).png';
import Free from '../image/Image (23).png';
import Wish from '../image/Image (20).png';

const Page = () => {
  return (
    <div className='flex flex-col justify-center  items-center p-[6%] overflow-hidden ' >
        <div className='flex max-sm:flex-col gap-[10vw] '>
          <h1 className='text-[40px]   '>About us</h1>
             <div className='flex flex-col gap-5'>
                <p className='text-[14px] font-bold text-[#1D1F1E] '>At Flow, we're committed to a sustainable future. As a pioneering <br /> force in the green energy sector, we've been at the forefront of <br /> the transition to clean, 
                renewable power sources. Our mission is <br /> simple yet profound: to create a world where energy is not only <br /> abundant but also environmentally responsible. We believe that <br /> by harnessing the power of nature,
                we can power the world and <br /> protect it simultaneously.</p>
                <button className=' w-[8vw] max-sm:w-[40%]   p-3 rounded-[25px] text-[13px]  bg-[#BEF264] font-bold'>Read More</button>
             </div>
        </div>
        <div className='flex flex-col p-20 ' >
                <div className='flex gap-5  max-sm:flex-col '>
                    <img src={Forestman} alt="" className=' max-sm:w-[30pc] max-sm:h-[40vh]  rounded-[30px] ' />
                    <img src={Harry} alt="" className='  max-sm:w-[30pc] max-sm:h-[40vh]   rounded-[30px] ' />
                    <img src={Free} alt=""  className='  max-sm:w-[30pc] max-sm:h-[40vh]   rounded-[30px]' />
                    <img src={Wish} alt="" className='  max-sm:w-[30pc] max-sm:h-[40vh]   rounded-[30px] ' />
                </div>
                <div className='flex gap-[50px] p-10 max-sm:flex-col max-sm:items-start   '>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[30px]  font-bold '>5,000 Mwh</h1>
                        <p className='text-[15px] text-[grey] '>Renewable Energy Generated</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[30px]  font-bold '>2,500+</h1>
                        <p className='text-[15px] text-[grey] '>Metric Tons of CO2 Reduced</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[30px]  font-bold '>10,000+</h1>
                        <p className='text-[15px] text-[grey] '>Customers Served</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[30px]  font-bold '>15%</h1>
                        <p className='text-[15px] text-[grey] '>Avg. Energy Saved</p>
                    </div>
                </div>
        </div>
       
    </div>
    
  )
}

export default Page