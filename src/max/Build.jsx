import React from 'react'
import Max from '../image/Custom Icon (6).png';
import Max2 from '../image/Custom Icon (5).png';
import Max3 from '../image/Custom Icon (7).png';
import Max4 from '../image/Custom Icon (4).png';


const Build = () => {
  return (
    <div className='flex justify-center items-center p-[8%] bg-[#FFF7ED] '>
        <div>
            <h1 className='text-[55px] '>Key to clean future</h1>
            <div className='flex flex-col gap-[60px] p-5'>
               <div className='max-sm:flex-col flex  gap-14'>
                    <div className=' flex flex-col gap-5'>
                        <img src={Max} alt="" className='h-7 w-7' />
                        <h1 className='text-[20px] font-bold '>EV charging </h1>
                        <p className='text-[grey]  text-[13px] '>EVs use electricity as a power source, which can be generated from renewable <br /> energy sources.
                        Our solutions help reducing greenhouse gas emissions in the <br /> transportation sector.</p>
                        <button className='w-[15%] max-sm:w-[20%] text-[10px] underline font-bold  '>Read More</button>
                    </div>
                    <div className=' flex flex-col gap-5'>
                       <img src={Max2} alt="" className='h-7 w-7' />
                        <h2 className='text-[20px] font-bold  '>Solar Energy</h2>
                        <p className='text-[grey] text-[13px] '>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these <br /> panels
                        capture the energy from the sun and convert it into electrical power.</p>
                        <button className='w-[15%]  max-sm:w-[20%] text-[10px] underline font-bold'>Read More</button>
                    </div>
               </div>
                <div className='flex  max-sm:flex-col gap-10'>
                    <div className=' flex flex-col gap-5'>
                        <img src={Max3} alt="" className='h-7 w-7' />
                        <h1 className='text-[20px] font-bold '>Wind Energy</h1>
                        <p className='text-[grey]  text-[13px] '>Wind turbines harness the kinetic energy of the wind to generate electricity. Wind <br /> farms with multiple turbines 
                        are commonly used to produce large amounts of <br /> clean energy.</p>
                        <button className=' w-[15%] max-sm:w-[20%]  text-[10px] underline font-bold'>Read More</button>
                   </div>
                    <div className=' flex flex-col gap-5'>
                        <img src={Max4} alt="" className='h-7 w-7' />
                        <h1 className='text-[20px] font-bold '>Hydropower</h1>
                        <p className='text-[grey]  text-[13px] '>This technology uses the energy from flowing water, such as rivers and dams,
                        to <br /> turn turbines and generate electricity. It's one of the oldest forms of renewable <br /> energy.</p>
                        <button className=' w-[15%] max-sm:w-[20%]  text-[10px] underline font-bold'>Read More</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Build